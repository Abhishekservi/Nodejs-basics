const fs = require('fs');
const os = require('os');

///Sync ---> Blocking code
// console.log('1');
// const response = fs.readFileSync('hello.txt', 'utf-8');
// console.log(response);
// console.log('2');


///Async ---> Non-blocking code

console.log('1');
fs.readFile('hello.txt', 'utf-8', (error, response) => {
    console.log(response)
})

console.log('2')


//Get computer information

console.log('OS:', os.cpus().length);  // 12 cores