const os = require("os");

var freeMemory = os.freemem();
var totalMemory = os.totalmem();

console.log(`Total memory : ${totalMemory}`);
console.log(`Free memory  : ${freeMemory}`);