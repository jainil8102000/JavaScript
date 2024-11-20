let score = "33abc"
// console.log(typeof(score)); // write as a method
// console.log(typeof score);

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber); //output will be NaN beacuse there is text with number 

//   NaN - Not a number
//  "33" => 33
//  "33abc" => NaN
//  true => 1, false => 0
 
let isLoggedIn = 1;
let booleanIsloggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanIsloggedIn);

// 1 => true, 0 => false,
// "" => false
// "hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(typeof stringNumber);



/****************** Operations *****************/

let value = 3
let nagValue = -value

// console.log(nagValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = "jainil"

let str3 = str1 + "" + str2
// console.log(str3);

// console.log(1 + "2"); // 12
// console.log("1" + 2); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32


// console.log(+true);
// console.log(+"");

let gameCounter = 100
// gameCounter++
++gameCounter
console.log(gameCounter);

// Prefix and Postfix Operators

// Example:
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"