var express = require('express');
var router = express.Router();
var TweetsService = require('../services/tweetsService');


router.get('/tweets', function (req, res) {
    TweetsService.getTweets().then(tweets => {
        var result = {
            statusCode: 200,
            message: "success request",
            data: tweets
        }
        res.status(200);
        res.json(result);
    }).catch(err=>{
        var result = {
            statusCode: 400,
            message: "fail request",
        }
        res.status(400);
        res.json(result);
    })
});

module.exports = router;
