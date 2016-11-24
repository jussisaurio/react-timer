var express = require('express');

// create the app
var app = express();

app.use(express.static('public')); // express.static defines a folder to expose to the webserver

var port = process.env.PORT;
app.listen(port || 3000, function() {

	console.log('Express server running on port 3000, perkele');
})