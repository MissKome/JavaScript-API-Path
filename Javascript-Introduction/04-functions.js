//Sum
function sum (a,b) {
   return a + b;
}

console.log(sum(10,10));

//Product
function product (a,b) {
   return a * b;
}

console.log(product(10,10));  

const bigProduct = product(122, 1234); 
console.log(bigProduct);

//Anonymous function
setTimeout(function () {
    console.log("Hey you!")

}, 1000);

//Arrow Function
setTimeout(() => {
    console.log("Hey you!")

}, 1000);