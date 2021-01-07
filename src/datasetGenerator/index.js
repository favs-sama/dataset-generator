const { generateCommentAnalytics } = require('./generateCommentAnalytics');
const { generatePostAnalytics } = require('./generatePostAnalytics');

const fs = require('fs');

async function generateAnalyticsDatabase() {
  const tableSize = 30;
  let postAnalyticsData = [];
  let commentAnalyticsData = [];

  for (let i = 0; i < tableSize; ++i) {
    const data = generatePostAnalytics(new Date(Date.UTC(2020, 11, i + 1)));
    // generate comments data
    for (let j = 0; j < data.comments; ++j) {
      commentAnalyticsData.push(generateCommentAnalytics(data.post_id, data.date));
    }

    postAnalyticsData.push(data);
  }

  const postsDb = {
    "post_analytics" : postAnalyticsData
  };

  const commentsDb = {
    "comment_analytics" : commentAnalyticsData
  }

  await fs.writeFile('src/data/posts_analytics.json', JSON.stringify(postsDb), { flag : 'w' }, (err) => {
    if (err) {
      throw err;
    }

    console.log('posts db was saved');
  });

  await fs.writeFile('src/data/comments_analytics.json', JSON.stringify(commentsDb), { flag : 'w' }, (err) => {
    if (err) {
      throw err;
    }

    console.log('comments db was saved');
  });
}

generateAnalyticsDatabase();