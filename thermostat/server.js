const express = require('express');
const app = express();
const port = 3000;
const Thermostat = require('./thermostat');
const thermostat = new Thermostat();

app.get('/temperature', (req, res) => {
  const temperature = thermostat.getTemperature();
  res.send(`The current temperature is: ${temperature} degrees`);
});

app.post('/up', (req, res) => {
  thermostat.up();
  res.send('Temperature increased')
})

app.post('/down', (req, res) => {
  thermostat.down();
  res.send('Temperature decreased')
})

app.post('/reset', (req, res) => {
  thermostat.reset();
  res.send('Temperature reset')
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);