// singleton
// Object.create

// Object literals 
const mySym = Symbol("key1")

const JsUser = {
    name : "dhiraj",
    age : 21,
    // mySym : "myKey1", // string 
   [mySym] : "myKey1",
    "full name" : "dhiraj rajput",
    location : "Nashik",
    email : "rajputdhiraj@gmai.com",
    isLogedIn : false,
    lastLogedinDays : ["monday","saturday"] 
}
// console.log(JsUser.age) // 21
// console.log(JsUser["age"]) // 21


// console.log(JsUser["full name"])
// console.log( typeof JsUser[mySym])

JsUser.age = 22;
console.log(JsUser) // age : 22
Object.freeze(JsUser)
JsUser.age = 33;
console.log(JsUser)  // age : 22