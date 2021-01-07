function generateRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = { generateRandomNumber };