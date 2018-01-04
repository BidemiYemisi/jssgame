var http = require('http');
var fs = require("fs");

http.createServer(function(request, response) {
  fs.readFile("index.html", function(err, data){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    response.end();
  });

  fs.readFile("index.js", function(err, data){
    response.writeHead(200, {'Content-Type': 'text/javascript'});
    if(err){
			response.writeHead(404);
			response.write("Not Found!");
		}
		else{
			response.writeHead(200, {'Content-Type': 'text/javascript'});
			response.write(data);
		}
		response.end();
  });

		//sendFileContent(response, request.url.toString().substring(1), "text/css");




}).listen(3000);
