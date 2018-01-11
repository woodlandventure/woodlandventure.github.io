var http = require('http');
var fs = require('fs');
var express = require('express');
require('newrelic');
var app = express(); 

app.use('/', express.static('public', {maxAge: 86400}));
app.listen(process.env.PORT || 8080);

app.get('/', function(req,res) {
    fs.readFile('public/html/homepage.html', function(err, data) {
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
    fs.readFile('public/html/contact.html', function(err, data) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        res.end();
    })
});

app.get('/projects', function(req,res) {
    fs.readFile('public/html/projects.html', function(err, data) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        res.end();
    })
});

//Keep the website awake
setInterval(function() {
    http.get("http://woodlandventure.co.uk");
}, 300000); // every 5 minutes (300000)