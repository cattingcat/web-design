const     express 	= require('express')
		, http 		= require('http')
		, config 	= require('./config.json');

var app = express();
var server = http.Server(app)

app.use('/site');
app.set('etag', true);

server.listen(config.port, function(){
    console.log('Express server listening on port ' + config.port);
});