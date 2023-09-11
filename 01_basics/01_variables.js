const accountId = 12453
let accountEmail = "ainain@google.com"
var accountPassword = "123@ainain"
accountCity = "gaya";
let accountState

// accountId = 2 // not allowed
accountEmail = "ahmed@google.com"
accountPassword = "321@ainain"
accountCity = "patna"

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
