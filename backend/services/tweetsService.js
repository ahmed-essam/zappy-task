const Twitter = require('twitter');
const Config = require('../config');
const Tweets = require('../models/tweets');
const client = new Twitter({
    consumer_key: Config.twitter.consumer_key,
    consumer_secret: Config.twitter.consumer_secret,
    access_token_key: Config.twitter.access_token_key,
    access_token_secret: Config.twitter.access_token_secret
});
const params = { screen_name: Config.twitter.screen_name }


module.exports = {
    getTwitterData: () => {
        var promise = new Promise(function (resolve, reject) {
            client.get(Config.twitter.URL, params, (error, tweets, res) => {
                if (error)
                    reject(error);
                resolve(tweets);
            });
        });
        return promise;
    },
    saveTweets: async (tweets) => {
        try {
            var oldTweets = await Tweets.find({});
            var oldIds = oldTweets.map(tweet => tweet.id);
            var storedTweets = tweets.filter(tweet => oldIds.indexOf(tweet.id) == -1);
            var result = await Tweets.create(storedTweets);
            return Promise.resolve(result ? result : []);
        } catch (e) {
            return Promise.reject(e);
        }
    },
    getTweets: async (req) => {
        try {
            var result = await Tweets.find();
            console.log(result);
            return Promise.resolve(result);
        } catch (e) {
            return Promise.reject("fail to get Tweets");
        }
    }
}