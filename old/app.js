const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));

const port = process.env.PORT || 8000;

// Add headers
app.use(function (req, res, next) {

	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');

	// Request methods you wish to allow
	// res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	// res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});

app.use(express.static(__dirname));
app.get('/', (req, res) => res.sendfile('index.html'));

const server = app.listen(port, function () {
	console.log('Listening on port ' + port);
});

