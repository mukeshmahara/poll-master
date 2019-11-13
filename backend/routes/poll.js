const router = require('express').Router();
let PollQuestion = require('../models/pollquestions.model');


router.route('/').get( (req, res) => {
    PollQuestion.find()
        .then( polls => res.json(polls) )
        .catch( err => console.log('Error: '+ err ));
});


router.route('/add').post((req, res) => {
    const question = req.body.question;
    const option1 = req.body.option1;
    const option2 = req.body.option2;
    const option3 = req.body.option3;
    const option4 = req.body.option4;


    const newPoll = new PollQuestion ({
        question,
        option1,
        option2,
        option3,
        option4,
    });

    newPoll.save()
        .then(() => res.json("New Poll Added!"))
        .catch( err => res.status(400).json('Error: '+ err));
});

module.exports = router;