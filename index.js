var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express(); 

app.use('/', express.static('public'));
app.listen(process.env.PORT || 8080);

app.get('/', function(req,res) {
    fs.readFile('public/default.html', function(err, data) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        res.end(); 
    })
});

app.get('/about', function(req,res) {
    fs.readFile('public/html/about.html', function(err, data) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        res.end();
    })
});

app.get('/contact', function(req,res) {
    fs.readFile('public/html/findus.html', function(err, data) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        res.end();
    })
});