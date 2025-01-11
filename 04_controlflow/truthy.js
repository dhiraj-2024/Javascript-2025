// const userEmail = "dhiraj@gmail.com"; // got user email
// const userEmail = ""; //Don't have user email
// const userEmail = []; // got user email
const userEmail = {}; // got user email 




if(userEmail){
    console.log("got user email");

}
else{
    console.log("Don't have user email")
}



// falsy values
// * false 
// * 0
// * -0
// * BigInt 0n 
// * NaN
// * undefined 
// * null 



// truty values 
// * " "
// * "false"
// * "0"
// * []
// * {}
// * function(){}



// check array is empty or not 

const array= [];
if(array.length === 0){
    console.log("array is empty")
}


// check object is empty or not 

const myobj= {name:"dhiraj"};
if(Object.keys(myobj).length === 0){
    console.log(`object have value : ${myobj}`)
}
else{
    console.log("obj is empty")
}


// false = 0 //true
// false = '' // true 
// 0 = '' // true 


// ************ Nullish Coalescing Operator (??) : null undefined 

let val1;
// val1 = 5 ?? 10; //5
// val1 = null ?? 10; //10
// val1 = undefined ?? 10; //10
// val1 = null ?? null; //null
// val1 = null ?? 10 ?? 20 //10

