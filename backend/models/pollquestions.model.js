const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const pollQuestionSchema = new Schema ({
    Question : {type: String , required: true},
    option1:  {type: String , required: true},
    option2: {type: String , required: true},
    option3: {type: String , required: true},
    option3: {type: String , required: true},
},
{
    timestamps:true,
});

const PollQuestion = mongoose.model('PollQuestion', pollQuestionSchema)
module.exports= PollQuestion;


