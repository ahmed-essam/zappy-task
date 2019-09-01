
const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const urlEncodedMid = bodyParser.urlencoded({ extended: true });
const jsonParser = bodyParser.json();
const mongoose = require("mongoose");
const slackListen = require('./services/slackService');
const TweetsController = require('./controllers/tweetsController')


//connect to database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

slackListen((err) => {
  if (err)
    console.log(err);
});

// allow origines and method
server.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Content-Type");
  response.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE")
  next();
});

server.use(jsonParser);

server.use(urlEncodedMid);

server.use('/', TweetsController);

// catch 404 and forward to error handler
server.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
server.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);

});


server.listen("9000", () => {
  console.log("server is on .........");
});

module.exports = server;