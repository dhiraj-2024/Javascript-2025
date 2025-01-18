const promisOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("task 1")
        resolve()
    },1000)
})

promisOne.then(function(){
    console.log("promisOne done")
})
// **********************************************************************

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("promis two execute")
})
// **********************************************************************

const promisThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "dhiraj", email: "dhiraj@example.com" })
    },1000)
})
promisThree.then(function(user){
    console.log(user)
})
// **********************************************************************

const promisFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "dhiraj" , email : "dhiraj@example.com"})
        }else{
            reject("ERROR: something went wrong")
        }
    },1000)
})
promisFour
.then(function(user){
    console.log(user)
    return user.username
})
.then((username)=>{
console.log(username)
})
 .catch((error )=>{
console.log(error)
})
.finally(()=>{
    console.log("the promis is either resolve or rejected")
})

// **********************************************************************

const promisFive = new Promise((resolve,reject)=>{
    let error = false;
    if(!error){
        resolve({userName:"Javascript",password: "2423534"})
    }else{
        reject("ERROR: something went wrong")
    }
});

async function consumepromisFive() {
   try{
    const response = await promisFive;
    console.log(response)
   }catch{
    console.log("ERRORRRR")
   }
}

consumepromisFive()

// **********************************************************************

// async function getallUserData() {
//   try {
//     const response =  await fetch("https://jsonplaceholder.typicode.com/users")
//   const data = await response.json()
//   console.log(data)
    
//   } catch (error) {
//     console.log("big errrorrrr" , error)
//   }
// }
// getallUserData()

// **********************************************************************

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=> console.log(data))
.catch((error)=>{
    console.log(error)
})