var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World --- jjjj');
});

app.listen(8000);

console.log("escuchando port 8000");
console.log("escuchando port 8000");

