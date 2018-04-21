const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userSchema = require('./data/schema.js');

const app = express();

app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set("view engine", "ejs");

var User = mongoose.model('users', userSchema);

app.get('*', (req, res) => {
  res.render('index');
  console.log("hello login")
})

app.post('/login', (req, res) => {
  console.log(JSON.stringify(req.body));
});

app.listen(3000, function() {
  console.info('port 3000');
});