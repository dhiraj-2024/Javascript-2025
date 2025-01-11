// // if 
//  if (true){
// // console.log("execute code")
//  }
//  if(false){

//     //from line no 6 code will not execute
//  }

// //  comparission operator : < , > , <= , >= , == ,!= , === : triple equla chackes also types , !==  

// if(condition)
// {
// // if condition is true then executed otherwise else block executed 
// }
// else{
 
// }


// const score = 220;

// if(score>100){
//     // const power= "fly";
//     // var power= "fly"; 


//     console.log(`user have power to : ${power}`)
// }

// console.log(`user have power to : ${power}`) //ReferenceError: power is not defined
// // we use const for power variable to declre it and print outside the scope so we will get error 



// ************************  IMPLICIT SCOPE ******************* basicaly execute in one line 

const balance = 1000;

// if(balance>500) console.log("execute"); // execute 

// **************** NESTED IF ELSE BLOCK *****************

// if(balance>1100){
//     console.log("balance is above 1100");

// }
// else if(balance>500)
// {
//     console.log("balance is above 500");
// }
// else
//    { console.log("balance is zero")
// } 


// ***************** USE IN REAL LIFE ***************

const userLoggedIn = true;
const debitCard = true ;
const userLogginWithEmail = true ;
const userLogginWithGoogle = false ;

if(userLoggedIn && debitCard){
    console.log("allow user to shopping")
}
else {
    console.log("dont allow user to shopping");
}


if(userLogginWithEmail || userLogginWithGoogle){
console.log("user loged in ")
}
else{
    console.log("you are not loged in ")
}