// console.log(module);

const logger = require("./log");

const path = require("path"); //Built in Module
var pathObj = path.parse(__filename);

console.log(logger);
logger.log("Passing me to function!!");

console.log(pathObj);