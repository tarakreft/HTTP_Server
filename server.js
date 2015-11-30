var http = require('http');
	path = require('path');
        
var server = http.createServer(function (req, res){
	var time = new Date(),
		name = path.basename(req.url),
		a = req.url;

	if (req.url === '/time') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<h1>the date and time are </h1><h1>' + time + '</h1>');
		res.end();
	}

	if (path.dirname(a) === '/greet') {
		if (req.method === 'GET') {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write('<h1>why hello there</h1><h1>' + name + '</h1>');
			res.end();
		}

		else if (req.method === 'POST') {
			var body = '';
			req.on('data', function (chunk) {
				body += chunk.toString();
			});
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write('<h1>we meet again</h1><h1>' + name + '</h1>');
			res.end();
		}
	}
});

server.listen(3000, function (err){
	if (err) throw err;
	console.log('server listening at 3000...');
});


