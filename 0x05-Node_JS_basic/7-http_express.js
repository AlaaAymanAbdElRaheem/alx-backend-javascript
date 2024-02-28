const express = require('express');
const countStudents = require('./3-read_file_async');

const path = process.argv[2];
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const data = await countStudents(path);
    res.send(`This is the list of our students\n${data}`);
  } catch (error) {
    res.send(`${error.message}`);
  }
});

app.listen(1245, () => {});

module.exports = app;
