 // array
//  let myArry2=[0,1,2,3,4,5,true,"dhiraj"] elements like numbers,strings, boolan etc;
 
 // js arrays are resisable 
 // contain mix of data-types

 // js array are not assosiative array.
 //  console.log(myArry[2]);
 //  console.log(myArry["two"]);  not allow

 // zero base indexing ;
 // js array copy operation create shallow copy : 
 // shallow copy : properties share the same referance, changes are save in orignal array
 // deep copy : properties do not share the same referance point

 const myArry=[0,1,2,3,4,5]
 const myHeros = ["shaktiman","nagraj"]
 const myArry2= new Array(1,2,3,4,5)
//  console.log(myArry[1])
//  console.log(myArry2[1])


//  Array methods 
// myArry.push(8)
// console.log(myArry) //[ 0, 1, 2, 3, 4, 5, 8 ]

// myArry.pop(8)
// console.log(myArry) //[ 0, 1, 2, 3, 4, 5 ]

// myArry.unshift(55) // there is problem it insert the value at the starting of the array so the indexing of all the element is shifted so i.e; time consuming 
// console.log(myArry) //[ 55, 0, 1, 2, 3, 4, 5]

// myArry.shift()
// console.log(myArry) // [1, 2, 3, 4, 5 ]

// console.log(myArry.includes(3)) //true 
// console.log(myArry.includes(6)) //false
  

// const newArray = myArry.join()

// console.log(myArry) // [ 0, 1, 2, 3, 4, 5 ]
// console.log(newArray) //  0,1,2,3,4,5
// console.log(typeof newArray) // string


// *************** slice , splice ******************

console.log("A", myArry) // A [ 0, 1, 2, 3, 4, 5 ]
const myNa1 = myArry.slice(1,3)
console.log( myNa1) // [ 1, 2 ] 
console.log("B", myArry) // B [ 0, 1, 2, 3, 4, 5 ]


const myNa2 = myArry.splice(1,3)
console.log( myNa2) //[ 1, 2, 3 ] 
console.log("C", myArry) //C [ 0, 4, 5 ]

// splice operation manupulate the orignal array : 