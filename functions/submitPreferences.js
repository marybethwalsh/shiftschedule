const fs = require('fs');
const path = require('path');

// Path to store data
const dataFilePath = path.join(__dirname, 'data.json');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const { studentName, preferences } = JSON.parse(event.body);

    // Load existing data
    let data = [];
    if (fs.existsSync(dataFilePath)) {
      data = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
    }

    // Add or update student preferences
    const existingStudentIndex = data.findIndex((entry) => entry.studentName === studentName);
    if (existingStudentIndex >= 0) {
      data[existingStudentIndex].preferences = preferences;
    } else {
      data.push({ studentName, preferences });
    }

    // Save updated data
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Preferences saved successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to save preferences' }),
    };
  }
};
