const user = {
    username: "dhiraj",
    price:999,

    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`)
    }
    
}
// user.welcomemessage()
// user.username="rajput"
// user.welcomemessage()


// function example(){
//     let username = "dhirajj"
//     console.log(this.username) //undefined this is not used in functions

// }
// example()


// *******************arrow functions ******************

// ()=>{

// }

const newfunc = (num1 , num2)=>{
    return num1 + num2
}

console.log(newfunc(4,6)) //10

newfunc2 = (n1,n2)=> (n1+n2); // *****************special in react one line arrow function no need to return keywork
// console.log(newfunc(4,9)) //13

newfunc3 = (n1,n2)=> ({username:"dhiraj"});
console.log(newfunc3()) //{ username: 'dhiraj' }