// DATATYPES 

// 1.Primitives: String, Number ,Boolean ,BigInt ,Symbol ,null ,undefined :

let name = "dhiraj"; //string
let values = 45; //number
let islogdin = true;  //boolean
// let bigvalue = 23435434536356345n.  //bigint
let outsidetemp = null; //object
let state; //undefined
const id = Symbol("123"); //symbole
const newid = Symbol("123")

// console.log(id === newid);

// 2.Non_Primitives: Array , Object , function :

const student =["dhiraj","suyog","pooja","radha"];//object


myobj ={
    Myname:"dhiraj",
    age : 21,
    city: "nashik"
}//object

const myfirstfunction = function(){
    console.log("hello js ");
}//function

// console.log(typeof student)


// +++++++++++++++++++++++++++++++++++STACK AND HEAP MEMORY IN JAVASCRIPT++++++++++++++++++++++++++++++++++++++++++

// primitive(stack).                  Non-primitive(heap)

let myYoutubeName = "dhirajvlg";
let myanotherYtName = myYoutubeName;
myanotherYtName = "newvlgdhiraj"

// console.log(myanotherYtName)



let userone = {
    email : 'user@gmail.com',
    age: 23

}

let usertwo = userone;
usertwo.email = "dhiraj@gmail.com"
console.log(usertwo.email)
console.log(usertwo.email)