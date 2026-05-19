const accountId = 1234
let accountEmail = "ritika@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 345 is not allowed becaue it declared using const

accountEmail = "saini@gmail.com"
accountPassword = 234
accountCity = "Alwar"

console.log(accountId);

/*
Prefer do not use var because of issue in block and space and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
