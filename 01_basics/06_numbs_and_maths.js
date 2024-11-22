const score = 400
const balance = new Number(200)
// console.log(score);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // to show decimal 

const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3)); // to get precise value

const hundreds = 1233434
// console.log(hundreds.toLocaleString('en-IN')); // to get proper comma value.


// ++++++++++++++ MATHS +++++++++++++++

console.log(Math);

// console.log(Math.abs(-4)); // change nagative to positive value.
// console.log(Math.round(4.4)); // to get round figure value.
// console.log(Math.ceil(4.2)); // to get round figure up value (up, ceil (ceiling means top)).
// console.log(Math.floor(4.2)); // to get round figure down value (down, floor (floor means down)).
// console.log(Math.min(3,8,4,1,9)); // to get minimum value form an array
// console.log(Math.max(3,8,4,1,9)); // to get maximum value form an array

console.log(Math.random()); // it gives value in between 0 & 1

console.log(Math.random() * 10 + 1); 
console.log(Math.floor(Math.random() * 10) + 1); 

const min  = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
