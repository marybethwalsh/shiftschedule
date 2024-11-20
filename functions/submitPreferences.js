// functions/submitPreferences.js

exports.handler = async function(event, context) {
    try {
      if (event.httpMethod === 'POST') {
        const data = JSON.parse(event.body);
  
        // Here you can process the data, e.g., store it in a database or send it to an email
        console.log('Received preferences:', data);
  
        // For now, we are just returning a success message
        return {
          statusCode: 200,
          body: JSON.stringify({ message: 'Preferences submitted successfully!' }),
        };
      }
  
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Error processing preferences.' }),
      };
    }
  };
  