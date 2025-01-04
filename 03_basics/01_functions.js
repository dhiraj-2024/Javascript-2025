 
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
        console.log("please enter username")
        return
    }

    return `${username} just login`
}

// console.log(userLoginMessage("dhiraj")) //dhiraj just login
// console.log(userLoginMessage("")) // just login
console.log(userLoginMessage()) //undefined just login 

