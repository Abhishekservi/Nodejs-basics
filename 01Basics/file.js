const fs = require('fs');

// To create a file sync

// fs.writeFileSync('hello.txt', 'Hello from m.js');

//to read a file sync

// console.log(fs.readFileSync('hello.txt', 'utf-8'));


// //to reeaad a file async

// fs.readFile('hello.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });


// /// to append a file

// fs.appendFileSync('hello.txt', 'Hello from m.js\n');

// //to remove a file

// fs.unlinkSync('hello.txt');

// //to make a directory

// fs.mkdirSync('newFolder/a/b/c', { recursive: true });


// //to remove a directory

// fs.rmdirSync('newFolder', { recursive: true });


// fs.writeFileSync('hello.txt', 'Hello from m.js');

// // fs.readFile('hello.txt', 'utf-8', (err, data) => {
// //     console.log(data);
// // })

// fs.cpSync('hello.txt', 'hello2.txt');

// fs.renameSync('hello2.txt', 'hello3.txt');
// console.log(fs.existsSync('hello.txt'));

// const response = fs.statSync('hello.txt');

// console.log(response);


const message = 'Hello world';

console.log(global);