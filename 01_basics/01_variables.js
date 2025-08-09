const accountId = 144553;
let accountEmail = "test12@gmail.com";
var accountPassword = "12345";
accountCity = "Jamnagar";
let accountState;
//accountId = 2  // not allowed

accountEmail = "acc@gmail.com";
accountPassword = "212121";
accountCity = "Nadiad";

/*
Prefer not to use var, because of issue in block and functionl scope
*/
console.log(accountId);
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
