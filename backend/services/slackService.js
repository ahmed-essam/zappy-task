const { RTMClient } = require('@slack/rtm-api');
const config = require('../config');
const keyWord = "go";
const TweetsService = require('./tweetsService');

// An access token (from your Slack app or custom integration - usually xoxb)
const token = config.slack.token;

// The client is initialized and then started to get an active connection to the platform
const rtm = new RTMClient(token);
var listen = function (callback) {
    rtm.start()
        .then(() => {
            console.log("slack wase connected......");
        })
        .catch(err => callback(err));

    rtm.on('message', (event) => {
        if (event.channel == config.slack.channel
            && event.text.toLowerCase().includes(keyWord)) {
            console.log(`Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}`);
            TweetsService.getTwitterData()
                .then(tweets => {
                    TweetsService.saveTweets(tweets);
                })
                .catch(e => console.log(e));
        }
    })
    return callback(null);
}

module.exports = listen;