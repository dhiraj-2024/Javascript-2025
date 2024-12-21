let score = undefined

// console.log(typeof score);
// console.log(typeof (score));

let valuInNumber = Number(score)
// console.log(valuInNumber);


// "23" => number
// "23dfhj" => NaN
// "null" => 0
// "undefined" =>  NaN
// boolean (true) => 1

let isLoggin = "";

let valueInBoolean = Boolean(isLoggin)
// console.log(valueInBoolean)

// 1 => true;
// 0 => false;
// "" => false;
// "dhiraj" => true;



// *********************************operations*********************************

let value = 3;
let negvalue = -value;
// console.log(negvalue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/2)
// console.log(2%3)

let str1 = "dhiraj"
let str2 = " rajput"
let str3 = str1 + str2 ;

// console.log(str3);

// console.log("1" + 1);
// console.log(1 + "2");
// console.log(3 + 5 + "3");
// console.log("3" + 3 + 5);



// *********************************Prefix(++a) and Postfix(a++) operators *********************************

let a = 4; // first "a" is increment and become 5 and assign to the "b" and the value of "b" will be 5
let b = ++a;
console.log(a,b)



let x = 4; // first value of "x" assign to the "y" and then that is 4 then it will increment and become 5
let y = a++;
console.log(x,y)