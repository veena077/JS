const accountId = 12345
let accountEmail = "veena@google.com"
var accountPassword = "911122"
accountCity = "Mumbai"
let accountState;

// accountId = 34525
accountEmail = "veena077@go.com"
accountPassword = "626547"
accountCity = "Udaipur"

/*
  Prefer not to use var
  because of issue in block scope and functional scope
*/
console.table([accountId , accountEmail , accountPassword , accountCity , accountState]);
