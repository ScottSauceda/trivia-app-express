var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');


router.get('/register', function(req, res) {

  userController.getAllUsers({})
    .then((users) => {
      res.json({
        confirmation: 'success',
        data: users
      }) // end res.json
    }) // end .then(users)
    .catch((err) => {
      res.json({
        confirmation: 'failure',
        data: err
      }); // end res.json
    }); // end .catch(err)

}); // end router.get(/register)

router.post('/register', function(req, res) {
  console.log(req.body)
  const signUp = req.body


  userController.newUserRegister(signUp)
    .then(user => {
      console.log('-----')
      console.log(user)
      res.status(200).json({
        data: user
      }) // end res.status(200)
    }) // end .then
    .catch(err => {
      const status = err.status
      const message = err.message
      console.log(err)
      res.status(status).json({
        mesage: message
      }) // end res.status(status)
    }) // end .catch
}) // end router.post(/register)

router.post('/login', function(req, res) {
  const { errors, isValid } = login(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  } // end if (!isValid)
  
  userController
  .login(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
}) // end router.post(/login)

module.exports = router;
