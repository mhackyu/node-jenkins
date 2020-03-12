//importing node framework
const express = require('express')
const app = express();

app.get('/', function (req, res) {
 res.send('hello world');
});

app.listen(process.env.PORT || 4000, () => {
  console.log('App is listening');
});
 
module.exports = app;