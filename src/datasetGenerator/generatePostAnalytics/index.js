const { generateRandomNumber } = require('./../generateRandomNumber');
const { generateSentiment } = require('./../generateSentiment');
const { generatePrimaryKey } = require('./../generatePrimaryKey');
const { generateRandomKeyword } = require('./../generateRandomKeyword');

function generatePostAnalytics(date) {
  return {
    "post_id" : generatePrimaryKey(),
    "sentiment" : generateSentiment(),
    "likes" : generateRandomNumber(200),
    "comments" : generateRandomNumber(200),
    "shares" : generateRandomNumber(200),
    "reactions" : generateRandomNumber(200),
    "keyword" : generateRandomKeyword(),
    "date" : date
  }
}

module.exports = { generatePostAnalytics };

