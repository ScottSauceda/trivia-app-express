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
