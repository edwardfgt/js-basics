const express = require('express');
const app = express();
const port = 3000;
counter = 0;

app.get('/', (req, res) => {
  res.send('Hello, express! This is a test')
});

app.post('/counter', (req, res) => {
  res.send('Got a POST request')
  counter += 1;
})

app.get('/counter', (req, res) => {
  res.send(counter)
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);