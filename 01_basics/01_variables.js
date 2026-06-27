const accountId = 481995
let accountEmail = "pavna@gmail.com"
var accountPassword = "123345"
accountCity = "Mangalore"
let accountState;

// accountId = 2 // not allowed

accountEmail = "pav@hc.com"
accountPassword = "12344556"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table ([accountId,accountEmail,accountPassword,accountCity,accountState])
