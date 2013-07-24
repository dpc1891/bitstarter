var express = require('express');
var app = express();
app.use(express.logger());
var buffer =new Buffer("I'm a Fluffer","utf-8");
console.log(buffer);
app.get('/', function(request, response) {
  response.send('Hello World3!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
