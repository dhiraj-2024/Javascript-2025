 
//  console.log("D")
//  console.log("H")
//  console.log("I") 
//  console.log("R") 
//  console.log("A") 
//  console.log("J")

 function printMyName() {
     
 console.log("D")
 console.log("H")
 console.log("I") 
 console.log("R") 
 console.log("A") 
 console.log("J")
 }
//  printMyName // reference 
//  ---------- () // execution
// printMyName() 


// function addTwoNumbers(num1,num2){

//     console.log( num1 + num2 );
// }

// addTwoNumbers(4,5)
// addTwoNumbers(55,23)


function addTwoNumbers(num1,num2){

    // console.log( num1 + num2 ); // for solving this result is undefined problem 

    // let result = num1 + num2
    // return result

    return num1 + num2
}

const result = addTwoNumbers(4,8)
// console.log("Result is", result) // Result is undefined

function userLoginMessage(username){
    // if(username === undefined){
    //     console.log("please enter username")
    //     return
    // }
    if(!username){
        // console.log("please enter username")
        return
    }

    return `${username} just login`
}

// console.log(userLoginMessage("dhiraj")) //dhiraj just login
// console.log(userLoginMessage("")) // just login
console.log(userLoginMessage()) //undefined just login 


function calculateCartPrice(...itemprice){
    return itemprice;
}
// console.log(calculateCartPrice(200,400,23,34,5666,990)) //[ 200, 400, 23, 34, 5666, 990 ]


const user = {
    name : "dhiraj",
    price : 199
}

function handleObject(anyobject){
    return(`Username is ${anyobject.name} and the price is ${anyobject.price}`)
}

console.log(handleObject(
    {
        name:"dhiraj",
        price:1999
    }
)) //Username is dhiraj and the price is 1999


// console.log(handleObject(user)) //Username is dhiraj and the price is 199


const myNewArray = [200,334,2,34,55,889 ]

function returnSecondValue(anyarray){
    return(`second value of array is ${anyarray[1]}`)
}

console.log(returnSecondValue(myNewArray)) //second value of array is 334