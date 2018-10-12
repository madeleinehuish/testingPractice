
const express = require('express');
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/user', (req, res) => {
  res.status(200).json({ name: 'Madeleine' });
});

app.post('/redir', (req, res) => {
  res.redirect('/newpage')
})

app.get('/newpage', (req, res) => {
  res.send({ data: 'you got the moves'})
})

app.post('/form', (req, res) => {
  console.log('req: ', req.body);
  let form = { name: req.body.name, email: req.body.email };
  let combined = form.name + ' ' + form.email;
  res.send(combined);
})

module.exports = app;
