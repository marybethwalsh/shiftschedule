const fs = require('fs');
const path = require('path');

// Path to stored data
const dataFilePath = path.join(__dirname, 'data.json');

exports.handler = async () => {
  try {
    const data = fs.existsSync(dataFilePath)
      ? JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'))
      : [];

    if (data.length === 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'No preferences submitted' }),
      };
    }

    // Implement scheduling logic (simple best-fit example)
    const schedule = [];
    const usedSlots = {};

    data.forEach((student) => {
      for (const pref of student.preferences) {
        if (!usedSlots[pref]) {
          usedSlots[pref] = true; // Mark slot as used
          schedule.push({ name: student.studentName, time: pref });
          break;
        }
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(schedule),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to generate schedule' }),
    };
  }
};
