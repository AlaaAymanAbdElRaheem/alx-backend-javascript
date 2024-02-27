const fs = require('fs');

const countStudents = (path) => {
  data = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' }, (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
  });
  data = data.split('\n');
  data = data.slice(1, data.length - 1);
  console.log(`Number of students: ${data.length}`);
  let fields = {};
  let students = {};
  data.forEach((row) => {
    const student = row.split(',');
    const lastField = student.length - 1;
    fields[student[lastField]] = fields[student[lastField]] + 1 || 1;
    if (!students[student[lastField]]) {
      students[student[lastField]] = student[0];
    } else {
      students[student[lastField]] =
        students[student[lastField]] + ', ' + student[0];
    }
  });
  for (const field in fields) {
    if (field) {
      console.log(
        `Number of students in ${field}: ${fields[field]}. List: ${students[field]}`,
      );
    }
  }
};

module.exports = countStudents;
