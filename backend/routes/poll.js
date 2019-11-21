const router = require('express').Router();
let PollQuestion = require('../models/pollquestions.model');


router.route('/').get( (req, res) => {
    PollQuestion.find()
        .then( polls => res.json(polls) )
        .catch( err => console.log('Error: '+ err ));
});


router.route('/add').post((req, res) => {
    const question = req.body.question;
    const options = req.body.options;

    const newPoll = new PollQuestion ({
        question,
        options
    });

    newPoll.save()
        .then(() => res.json("New Poll Added!"))
        .catch( err => res.status(400).json('Error: '+ err));
});

module.exports = router;