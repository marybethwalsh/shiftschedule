// functions/getPreferences.js

const preferences = [
    { studentName: 'John Doe', preferences: ['Morning', 'Afternoon'] },
    { studentName: 'Jane Smith', preferences: ['Evening'] },
    // Add more mock data as needed
  ];
  
  exports.handler = async function(event, context) {
    return {
      statusCode: 200,
      body: JSON.stringify({ preferences })
    };
  };
  