var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.render(__dirname + '/index.jade');
});

app.use(express.static('./'));

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Server Up");