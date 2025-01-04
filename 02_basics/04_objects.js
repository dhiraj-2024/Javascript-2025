// const tinderUser = Object() 
const tinderUser = {}

tinderUser.id = "235asd"
tinderUser.name = "pratik"
tinderUser.age = 22
tinderUser.isLoggedIn = false

// console.log(tinderUser) // { id: '235asd', name: 'pratik', age: 22, isLoggedIn: false }

 const newuser = {
    email : "some@gmail.com",
    username : {
        fullname : {
            firstname : "pratik",
            lastname : "patil"
        }
    }
 }

//  console.log(newuser.username.fullname.firstname) //pratik 
//  console.log(newuser.lastname) // undefined

const obj1 = { 1:"a", 2: "b"}
const obj2 = { 3:"a", 4: "b"}

// const obj3 ={obj1,obj2}
// console.log(obj3) //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }



// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3 = Object.assign( {} , obj1, obj2)
// console.log(obj3)

// const obj3 = {...obj1,...obj2};
// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const user = [

    {
        id : "1",
        email : "sldjlfkj@gmail.com"
    },
    {
        id : "2",
        email : "jgvdflfkj@gmail.com"
    },
    {
        id : "3",
        email : "slgfytvlfkj@gmail.com"
    }
]

// user[1]
// console.log(user[1])

// console.log(tinderUser)
// console.log(Object.keys(tinderUser)) // [ 'id', 'name', 'age', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)) // [ '235asd', 'pratik', 22, false ]


// console.log(Object.entries(tinderUser)) 

/* 
output is : 

[
    [ 'id', '235asd' ],
    [ 'name', 'pratik' ],
    [ 'age', 22 ],
    [ 'isLoggedIn', false ]
]
    */

console.log(tinderUser.hasOwnProperty("name")) //  true

const cource ={
    courceName : "js in hindi ",
    price : "999",
    courceInstructor  : "Dhiraj Rajput"
}
// console.log(cource.courceInstructor) // Dhiraj Rajput

const {courceInstructor : Instructor } = cource;
// console.log(courceInstructor)  // Dhiraj Rajput
// console.log(Instructor)



// json format : we will get data from api in json format like this 


// {
//     "name" : "dhiraj",
//     "age" : "21",
//     "city" : "nashik"
// }

[
    {},
    {},
    {}
]