const { generateSentiment } = require('./../generateSentiment');
const { generatePrimaryKey } = require('./../generatePrimaryKey');

function generateCommentAnalytics(post_id, date) {
  return {
    "comment_id" : generatePrimaryKey(),
    "post_id" : post_id,
    "sentiment" : generateSentiment(),
    "date" : date
  };
}

module.exports = { generateCommentAnalytics };