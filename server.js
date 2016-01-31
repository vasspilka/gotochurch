var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/build'));

app.all('/*', function(req, res) {
    res.sendFile('index.html', { root: __dirname + '/build' });
});

//Start Server
app.listen(port);
console.log('Listening on port ' + port);
