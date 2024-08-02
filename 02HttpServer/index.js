//Creating a http server
const http = require('http');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('Welcome to the home page');
})

app.get('/about', (req, res) => {
    return res.send('Welcome to the about page');
});

app.listen(5000, () => {
    return console.log('Server is listening on port 5000');
})

// const myServer = http.createServer(app)
    
// //     (req, res) => {
// //     // if (req.url === '/favicon.ico') {
// //     //     return res.emit;
// //     // }
// //     // const log = `${Date.now()}: ${req.method} New request received from ${req.url}\n`;
// //     // const myurl = url.parse(req.url, true);
// //     // console.log(myurl);
// //     // fs.appendFile('log.txt', log, (err, data) => {
// //     //     switch(myurl.pathname) {
// //     //         case '/':
// //     //             res.end('Welcome to the home page');
// //     //             break;
// //     //         case '/about':
// //     //             res.end('Welcome to the about page');
// //     //             break;
// //     //         case '/contact':
// //     //             const username = myurl.query.myname;
// //     //             res.end(`Welcome, ${username}` );
// //     //             break;
// //     //         case '/services':
// //     //             res.end("Welcome to the services page");
// //     //             break;
// //     //         case '/search':
// //     //             const search = myurl.query.q;
// //     //             res.end(`You searched for ${search}`);
// //     //             break;
// //     //         case '/signup':
// //     //             if (req.method === 'GET'){
// //     //                 res.end("Welcome to the signup page");
// //     //             }
// //     //             else if (req.method === 'POST') {
// //     //                 res.end("You have signed up successfully");
// //     //             }

// //     //         default:
// //     //             res.end("404 page not found");
// //     //     }
// //     // });
    
// // })  //createServer() is a method that creates a server object


// myServer.listen(3000, () => {
//     console.log("Server is listening on port 3000");
// })