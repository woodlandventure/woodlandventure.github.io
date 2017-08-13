var http = require('http');
var url = require('url');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express(); 

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/', express.static('public'));
app.listen(8080);

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