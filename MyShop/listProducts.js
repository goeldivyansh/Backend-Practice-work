// console.log("hello");

var faker = require("faker");

var prodName = faker.commerce.productName();
var prodPrice = faker.commerce.price();

console.log("================");
console.log("List of Products");
console.log("================");
console.log("");

for(var i = 0; i < 10; i++) {
    // console.log(prodName + " : " + prodPrice);
    console.log(faker.commerce.productName() + " : $" + faker.commerce.price());
}