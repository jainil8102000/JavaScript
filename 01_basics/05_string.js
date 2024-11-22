const name = "john"
const repoCount = 50

// console.log(`${name}  ${repoCount}`);


const gameName = new String("Johhn Doe") 

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));




const str = 'Mozilla';

console.log(str.substring(1, 3));
// Expected output: "oz"

console.log(str.substring(2));
console.log(str.slice(-5, 2)); // ""
console.log(str.slice(-5, -2)); // "zil"
// Expected output: "zilla"

const str2 = 'The quick brown fox jumps over the lazy dog.';

console.log(str2.slice(31));
// Expected output: "the lazy dog."

console.log(str2.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str2.slice(-4));
// Expected output: "dog."

console.log(str2.slice(-9, -5));
// Expected output: "lazy"


const url = "https://google.com/jainil%20panchal"
console.log(url.includes("jainil"));
console.log(url.replace("%20", "-"));

const splitString = "jainil-panchal"
console.log(splitString.split("-"));

