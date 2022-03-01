var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Today is TUESDAy and day 3 of week" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Get ready to experience the bash of celebrations" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Congrats!, There you are!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
