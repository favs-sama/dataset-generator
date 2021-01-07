const { generateRandomNumber } = require('./../generateRandomNumber');

function generateSentiment() {
  // one hot encoding style of generating sentiment
  // [0] - negative
  // [1] - neutral
  // [2] - positive
  let sentiment = [0, 0, 0];

  sentiment[generateRandomNumber(3)] = 1;

  return sentiment;
}

module.exports = { generateSentiment };