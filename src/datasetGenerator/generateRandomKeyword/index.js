const { generateRandomNumber } = require('./../generateRandomNumber');

function generateRandomKeyword() {
  const keywords = [
    "promo",
    "coronavirus",
    "vaccine",
    "quarantine"
  ];

  return keywords[generateRandomNumber(keywords.length)];
}

module.exports = { generateRandomKeyword };