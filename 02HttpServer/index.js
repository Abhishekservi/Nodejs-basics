//Creating a http server
const fs = require('fs');
const http = require('http');

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: New request received from ${req.url}\n`;
    fs.appendFile('log.txt', log, (err, data) => {
        switch(req.url) {
            case '/':
                res.end('Welcome to the home page');
                break;
            case '/about':
                res.end('Welcome to the about page');
                break;
            case '/contact':
                res.end("Welcome to the contact page");
                break;
            default:
                res.end("404 page not found");
        }
    });
    
})  //createServer() is a method that creates a server object


myServer.listen(3000, () => {
    console.log("Server is listening on port 3000");
})