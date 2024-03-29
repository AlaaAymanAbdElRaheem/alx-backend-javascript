const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, { encoding: 'utf8', flag: 'r' }, (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    const msg = [];
    let dataList = data.split('\n');
    dataList = dataList.slice(1, dataList.length - 1);
    console.log(`Number of students: ${dataList.length}`);
    msg.push(`Number of students: ${dataList.length}`);
    const fields = {};
    const students = {};
    dataList.forEach((row) => {
      const student = row.split(',');
      const lastField = student.length - 1;
      const name = student[0];
      fields[student[lastField]] = fields[student[lastField]] + 1 || 1;
      students[student[lastField]] = students[student[lastField]]
        ? `${students[student[lastField]]}, ${name}`
        : name;
    });
    for (const field in fields) {
      if (field) {
        console.log(
          `Number of students in ${field}: ${fields[field]}. List: ${students[field]}`,
        );
        msg.push(
          `Number of students in ${field}: ${fields[field]}. List: ${students[field]}`,
        );
      }
    }
    resolve(msg.join('\n'));
  });
});

module.exports = countStudents;
