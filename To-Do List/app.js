const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

let tasks = [];

app.get('/', (req, res) => {
  res.render('index', { tasks });
});

app.post('/add', (req, res) => {
  const task = req.body.task;
  tasks.push(task);
  res.redirect('/');
});

app.post('/update/:id', (req, res) => {
  const id = req.params.id;
  const updatedTask = req.body.task;
  tasks[id] = updatedTask;
  res.redirect('/');
});

app.get('/delete/:id', (req, res) => {
  const id = req.params.id;
  tasks.splice(id, 1);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});