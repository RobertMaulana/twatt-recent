const express = require('express');
const OAuth = require('oauth');
require('dotenv').config();

let twitterTimeline = (req, res) => {
  let oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.CONSUMER_KEY,
  process.env.APPLICATION_SECRET,
  '1.0A',
  null,
  'HMAC-SHA1'
);
oauth.get(
  'https://api.twitter.com/1.1/statuses/user_timeline.json',
  process.env.USER_TOKEN,
  process.env.USER_SECRET,
  (err, data) => {
    let timeline = [];
    let dataTimeline = JSON.parse(data)
    dataTimeline.forEach((result) => {
      timeline.push(result.text)
    })
    res.send(timeline)
  });
}

module.exports = {
  twitterTimeline
}
