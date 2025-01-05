// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a) //10
// console.log(b) //20
// console.log(c) //30 

// {} these curly brackets are called a scope  

var c = 4434;  // when we print c we will get the value 30 cause var c = 30 is declare in below so it will take this value 
// so we can not use var 
// ** this is global scope and the below if block code is block-scope 
// globle scope values are avilable in block-scope but block-scope values are not avilable to global scope 

let a = 488;

if(true){
    let a = 10;
    const b = 20;
    // var c = 30;
    console.log("Inner A : ", a) //Inner A :  10 
}

// console.log(a)  // a is not defined
// console.log(b)   // b is not defined
// console.log(c) //30 
 
console.log(a) //488