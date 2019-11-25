const router = require('express').Router();
let PollQuestion = require('../models/pollquestions.model');


router.route('/').get( (req, res) => {
    PollQuestion.find()
        .then( polls => res.json(polls) )
        .catch( err => console.log('Error: '+ err ));

});

router.route('/trending').get( (req, res) => {
    PollQuestion.find().sort({ __v: -1 })
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

router.route('/vote/:pollId').post((req, res) => {
    PollQuestion.findById(req.params.pollId)
        .then(pollQuestion => {
            pollQuestion.question = req.body.question;
            pollQuestion.options = req.body.options;

        pollQuestion.save()
            .then(()=> res.json('Poll Updated'))
            .catch( err => res.status(400).json('Error: ' + err ));
        })
});


router.route('/:id').get((req, res) => {
    PollQuestion.findById(req.params.id)
        .then (pollQuestion => res.json(pollQuestion))
        .catch (err => res.status(400).json('Error: '+ err));
});

module.exports = router;