const fs = require('fs');
const path = require('path');

// Path to stored data
const dataFilePath = path.join(__dirname, 'data.json');

exports.handler = async () => {
  try {
    const data = fs.existsSync(dataFilePath)
      ? JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'))
      : [];

    return {
      statusCode: 200,
      body: JSON.stringify({ preferences: data }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to retrieve preferences' }),
    };
  }
};
