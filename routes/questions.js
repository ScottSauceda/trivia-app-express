var express = require('express')
var router = express.Router()

var questionsController = require('../controllers/questionsController')

router.get('/allQuestions', function (req, res) {
    questionsController.getAllQuestions({})
        .then((questions) => {
            res.json({
                confirmation: 'success',
                data: questions
            });
        })
        .catch((err) => {
            res.json({
                confirmation: 'failure',
                data: err
            });
        });
});

router.post('/allquestions', function(req, res) {
    const question = req.body

    questionsController.addQuestions(question)
        .then((question) => {
            res.status(200).json({
                data: question
            })
        })
        .catch(err => {
            const status = err.status
            const message = err.message

            res.status(400).json({
                message: message
            })
        })
});


module.exports = router