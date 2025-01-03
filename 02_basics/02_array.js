
const marvelHeros = ["thor", "ironman", "spiderman"]
const dcHeros =["batman", "superman","flash"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros) //[ 'thor', 'ironman', 'spiderman', [ 'batman', 'superman', 'flash' ] ]

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros) //[ 'thor', 'ironman', 'spiderman', 'batman', 'superman', 'flash' ]


// Concatenating three arrays
// The following code concatenates three arrays:

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

// const numbers = num1.concat(num2, num3);

// console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// *********************** spread method (...value,...value1,...valueN)********************

// const all_variables_list = [...num1,...num2,...num3,...dcHeros,...marvelHeros]
// console.log(all_variables_list)// [ 1, 2, 3, 4, 5, 6,7, 8,9,'batman','superman','flash','thor', 'ironman','spiderman']


const another_array = [1,4,2,3,[7,4,9],5,9,0,3,[66,44,33,22,[111,444,666,888]]] 

// const new_another_array = another_array.flat(Infinity)
// console.log(new_another_array); //[ 1,   4,   2,   3,   7,  4,  9,5,   9,   0,   3,  66, 44, 33,22, 111, 444, 666, 888 ]


// console.log(Array.isArray("dhiraj")) //false
// console.log(Array.from("dhiraj")) //[ 'd', 'h', 'i', 'r', 'a', 'j' ]
// console.log(Array.from({name: "dhiraj"})) //[].  intresting case keys and values 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3))