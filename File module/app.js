const fs = require('fs');


//Sychronous method
// const files = fs.readdirSync('./');
// console.log(files);

//Asynchronous method
fs.readdir('./',function(err,files) {
    if(err) console.log('Error', err);
    else console.log('Result', files);
})