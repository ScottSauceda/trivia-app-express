const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

module.exports = {
    newUserRegister: (params) => {
        console.log(params)
        return new Promise((resolve, reject) => {
            User
                .findOne({email: params.email})
                .then( user => {
                    // using the register function to create a new user, if there is an error reject the process and log error message
                    if(user) {
                        let errors = {}
                        errors.message = 'Email taken! Pick another'
                        errors.status = 400
                        reject(errors)
                    } else {
                      // if create user a success, save the new user to the newUser variable, save their email, username, and password
                      const newUser = new User({
                          email: params.email,
                          username: params.username,
                          password: params.password
                      }) // end newUser

                      bcrypt.genSalt(10, (err, salt) => {
                          if(err) {
                              reject(err)
                         } // end bcrypt.genSalt
                         bcrypt.hash(newUser.password, salt, (err, hashedPassword) => {
                             // take the user password that is saved to a variable & hash the password
                             if(err) {
                                 reject(err)
                             } else {
                                 newUser.password = hashedPassword

                                 newUser
                                    .save()
                                    .then(user => resolve(user))
                                    .catch(err => reject(err))

                             } // end if(err) else
                         }) // end bcrypt.hash
                      }) // end bcrypt.genSalt
                    } // end if else (users)
                }) // end .then
                .catch(err => {
                    console.log(err)
                }) // end catch
        }) // end new Promise
    }, // end newUserRegister

    getAllUsers: (params) => {
        return new Promise((resolve, reject) => {

            User.find(params, (err, users) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(users);
                } // end if(err) else
            }); // end Register.find

        }); // end new Promise
    }, // end getAllUser

    login: (params) => {
        // save the user password and email to the variable after they enter it into the search box
        const email = params.email
        const password = params.password

        return new Promise((resolve, reject) => {
            // when user submits login, search for user by email, if email not found, then give error message
            User
                .findOne({email})
                .then(user => {
                    if(!user) {
                        let errors = {}
                        errors.email = "Email not found"
                        errors.status = 404
                        reject(errors)
                    } // end if(!user)
                    // compare entered password to password saved in datatbase
                    bcrypt
                        .compare(password, user.password)
                        .then( isAuth => {

                            if(!isAuth) {
                                let errors = {}
                                errors.password = "check password and email"
                                errors.status = 404
                            } else {
                                const payload = {
                                    id: user._id,
                                    email: user.email,
                                    name: user.name
                                } // end payload

                                jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: 4000}, (err, token) => {
                                    if(err) {
                                        console.log(err)
                                        reject(err)
                                    } // end if(err)

                                    let success = {}
                                    success.confirmation = "Complete"
                                    success.token = "Bearer " + token
                                    resolve(success)
                                }) // end jwt.sign

                            } // end if(!isAuth) else

                        }) // end inner .then
                }) // end outer .then
        }) // end new Promise
    } // end login

} // end module.exports