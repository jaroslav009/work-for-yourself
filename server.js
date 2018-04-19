const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(__dirname + '/views'));
app.set("view engine", "ejs");

app.get('*', (req, res) => {
  res.render('index');
})

app.listen(3000, function() {
  console.info('port 3000');
});