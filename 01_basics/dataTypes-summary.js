// Javascript is dynamiclly typed language.

// Primitve
// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

// Symbol is uses for unique value
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // false

const bigNumber =  123453n




// Reference Type (Non Primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "raone", "krish"];
let myObj = {
    name: "jainil",
    age: 24,

}

const myFunction = function(){
    console.log("Hello World!");
    
}

// How to find datatypes

console.log(typeof anotherId);

// Note: 

// => Null's return value using typeof is "undefined"