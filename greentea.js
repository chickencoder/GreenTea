/* 
        G R E E N T E A
    
           ) )   ) )
          ( (   ( (
           ) )   ) )
         _..,----,.._
      .-;'-.,____,.-';
     (( |            |
      `))            ;
       ` \          /
      .-' `,.____.,' '-.
     (     '------'     )
      `-=..________..--'

    Green Tea is a very lightweight
    node module for creating web
    applications quickly with little
    fuss.

    It could be considered as a toolkit
    or framework -- call it what you
    want!

    Created By Jesse Sibley
    30th June 2014

    GreenTea version 0.2.0 Beta
*/

var http = require('http');
var fs = require('fs');
var template = require('./modules/templ8.js');
var marked = require('./modules/marked.js');

var request;
var response;

// Display Welcome Message
console.log(
["",
"          ) )   ) )",
"         ( (   ( (",
"           ) )   ) )",
"        _..,----,.._",
"     .-;'-.,____,.-';",
"   ((  |  G R E E N |",
"    `))\\    T E A   ;",
"      ` \\          /",
"     .-' `,.____.,' '-.",
"    (     '------'     )",
"     `-=..________..--'", ""].join('\n'));
console.log("Green Tea ~ 0.2");

// Server Function
exports.HTTPServer = function(host, port, callback){
    http.createServer(function(req, res){
        request = req;
        response = res;
        callback(req, res);
    }).listen(port, host);
    console.log("Running Server http://" + host + ":" + port + "...");
    console.log("Ctrl-C to Exit");
}

/* 
    MAPPING FUNCTIONS:
        -- route (url, callback)
*/

// Fetches Callback if url matches && method 
// is correct.
exports.route = function(url, method, callback){
    regex = '^' + url + '$';
    var result = request.url.match(regex);
    if(result && request.method === method){
        callback();
    }
}

/*
    TEMPLATING FUNCTIONS:
        -- render (filename)
        -- html (htmlstring)
        -- markdown (markdownfile)
*/

// Render HTML Template
exports.template_html = function(filename, hash){
	template.render(response, filename, hash);
}

// Renders HTML String
exports.render_html = function(string){
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end(string);
}

// Renders Markdown String
exports.render_markdown = function(string){
    var tmp = marked(string);
    response.writeHead(200, {'Content-Type' : 'text/html'});
    var tmp = marked(string);
    response.end(tmp);
}

// Renders Markdown Script
exports.template_markdown = function(filename){
    fs.readFile(filename, 'utf8', function(err, data){
        if (err){
            console.log(err);
        } else {
            res.writeHead(200, {'Content-Type' : 'text/html'});
            var tmp = marked(data);
            res.end(tmp);
        }
    });
}

