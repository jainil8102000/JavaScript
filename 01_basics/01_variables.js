const accoountId = 15253;
let accountEmail = "account@gmail.com";
var accountPassword = "1412523";
accountCity = "Ahmedabad";

// accoountId = 2 // not allowed

accountEmail = "new@gmail.com";
accountPassword = "789456";
accountCity = "Pune";

console.table([accoountId, accountEmail, accountPassword, accountCity]);

// Prefer not to use var beacuse of issue in block scope and functional scope