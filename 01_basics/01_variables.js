 // get information from usrer to register

 const accountId = 125678
 let accountEmail = "rajput22@google.com"
 var accountPassword = "777333"
// we can not use var because it occure issue with block scope and functional scope

 accountCity = "nashik"
let accountState;

// accountId = 343  // not allowed cause it is const variabel value can't be changed
accountEmail ="rajputdhiraj@gmail.com"
accountPassword = "3939"
accountCity = "mumbai"

//  console.log(accountEmail);
//  console.log(accountPassword);
//  console.log(accountCity);

// use console.table to execute all the variables at ones or multiple variables at ones 

console.table([ accountId,accountEmail,accountPassword,accountCity,accountState]);