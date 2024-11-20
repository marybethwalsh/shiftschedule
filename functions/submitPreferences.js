// netlify/functions/submitPreferences.js

const { parse } = require('querystring');

exports.handler = async (event, context) => {
  if (event.httpMethod === 'POST') {
    try {
      const data = JSON.parse(event.body);

      // Simulating saving the preferences (you can store it in a database or send it to an email)
      console.log('Received data:', data);

      // Return a success response
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Preferences submitted successfully!' }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error processing the data', error }),
      };
    }
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }
};
