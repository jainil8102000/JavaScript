function palindrome(string){
    const strClean = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = strClean.split('').reverse().join('');
    return reversedStr === strClean;
}
const testStr = "Tenet";
console.log(palindrome(testStr));