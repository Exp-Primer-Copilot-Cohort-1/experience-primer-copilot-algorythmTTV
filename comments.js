// Create web server
// Run: node comments.js
// Access: http://localhost:3000/comments

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url === '/comments') {
        fs.readFile('comments.json', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/json'});
            res.write(data);
            res.end();
        });
    } else {
        res.writeHead(404);
        res.end();
    }
}).listen(3000);

console.log('Server running at http://localhost:3000/comments');