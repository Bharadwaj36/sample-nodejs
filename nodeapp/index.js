var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "This is new fork from Bharadwaj" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Get ready to experience" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Congrats!, There you are!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
