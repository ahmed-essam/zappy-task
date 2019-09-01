const chai = require('chai');
const expect = require('chai').expect
const should = chai.should();
const app = require('../app');
const TweetsController = require('../controllers/tweetsController')
const tweetsService = require('../services/tweetsService')
const slackListen = require('../services/slackService')
const Config = require('../config')
const slackData = Config.slack;
const chaiHttp = require('chai-http');
const testData = require('./testData');




describe("Save Tweets Test", function () {

    // it('listen to slack', function (done) {
    //     var request = Config.slack;
    //     this.request = request
    //     slackListen(function (err) {
    //         console.log(err);
    //         expect(err).to.be.null
    //         done()
    //     })
    // })

    it('save new Tweets', async () => {
        this.request = testData.newTweets;
        var response;
        try {
            response = await tweetsService.saveTweets(testData.newTweets)
        } catch (e) {
            console.log(e)
        }
        console.log(response);
        expect(response.length).to.be.at.most(testData.newTweets.length);
        for (var i = 0; i < response.length; i++) {
            expect(response[i].created_at).to.equal(testData.newTweets[i].created_at)
            expect(response[i].text).to.equal(newTweets[i].text)
        }
        this.response = response

    })

    chai.use(chaiHttp);
    it('get Tweets from db', function (done) {

        chai.request(app)
            .get('/tweets')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.data.should.be.a('array');
                done();
            });
    })


})
