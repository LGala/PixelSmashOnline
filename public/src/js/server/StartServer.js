var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static('public'));

app.get('/', function(req, res){
	res.render('index.html');
});

app.use(express.json());

app.post('/checkName', function(req, res){
	
});

var io = require('socket.io')(app.listen(app.get('port')));

io.on('connection', function(socket){

	socket.on('messageFromClient', function(data){

		socket.broadcast.emit('messageFromServer', data);
	});
});