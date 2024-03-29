const http = require('http');
const countStudents = require('./3-read_file_async');

const path = process.argv[2];

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const data = await countStudents(path);
      res.write(data);
    } catch (error) {
      res.end(error.message);
    }
  }
  res.end();
});

app.listen(1245, () => {});

module.exports = app;
