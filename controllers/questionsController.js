const Question = require('../models/Question')

module.exports = {

    getAllQuestions: (params) => {

        return new Promise((resolve, reject) => {

            Question.find(params, (err, questions) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(questions);
                }
            });
        });

    },

    addQuestions: (params) => {
        
        return new Promise(( resolve, reject) => {
           
            let category = params.category
            let questions = params.questions

           const newQuestion = new Question({
               "category": category,
               "questions": params.questions
           })


           newQuestion.save()
            .then(question => {
                resolve(question)
            })
            .catch(err => reject(err))
          

      
        })
    }

}