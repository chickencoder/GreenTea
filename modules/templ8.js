/*
	Templ8 0.1
  	
	Templ8 is an extremely
	lightweight templating
	module for node and
	rendering HTML.

	Created By Jesse Sibley
*/

var fs = require('fs');

exports.render = function(res, filename, hash){
	var template;
	fs.readFile(filename, 'utf8', function(err, data){
		if (err){
			console.log(err);
		} else {
			res.writeHead(200, {'Content-Type' : 'text/html'});
			res.end(data);
		}
	});	
}
