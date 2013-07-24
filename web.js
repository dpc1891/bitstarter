var express = require('express');
var app = express();
app.use(express.logger());
var buffer =new Buffer("I'm a Fluffer","utf-8");
console.log(buffer);
app.get('/', function(request, response) {
  response.send("THis is really not working is it");
});
console.log("im tyring to out ut this also");

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
