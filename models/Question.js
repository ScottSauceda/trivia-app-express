const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionsSchema = new Schema({
  
  category: {type: String, default: '', unique: true },
  questions: {type: [Schema.Types.Mixed], default: []}
    
})
module.exports = mongoose.model("questions", questionsSchema)


/*
{
  category: {type: type, default: '' },
  questions: {type: Array:, default: []}
}

{
  questio1: 'asdas,
  answer: 'asdasd
}

*/



// GOT: {
//     questions: {
//         [
//             {
//                 question-1.: 'hehe',
//                 answer: 'haha'
//             }
//         ]
//     }
// }
//
// FRIENDS:  {
//     questions: {
//         [
//             {
//                 question-1.: 'hehe',
//                 answer: 'haha'
//             }
//         ]
//     }
// }


// {
// 	"category": "Movies",
//     "questions": [
//         {
//           "question": "How old was Mark Hamil when first cast as Luke Skywalker?",
//              "answers": [
//           		{ 
//           			"type": "true",
//           			"content": "25"
//           		},
//           		{ 
//           			"type": "false",
//           			"content": "21"
//           		},
//           		{ 
//           			"type": "false",
//           			"content": "18"
//           		},
//           		{ 
//           			"type": "false",
//           			"content": "31"
//           		},
//           	]
//       },
//       {
//           "question": "What is the highest grossing movie of all time?",
//           "answers": [
//           		{ 
//           			"type": "true",
//           			"content": "Avatar(2009)"
//           		},
//           		{ 
//           			"type": "false",
//           			"content": "Titanic(1997)"
//           		},
//           		{ 
//           			"type": "false",
//           			"content": "The Matrix(1999)"
//           		},
//           		{ 
//           			"type": "false",
//           			"content": "The Avengers 4(2018)"
//           		},
//           	]
//       }
//     ]

// }