let score = undefined

console.log(typeof score);
console.log(typeof (score));

let valuInNumber = Number(score)
console.log(valuInNumber);


// "23" => number
// "23dfhj" => NaN
// "null" => 0
// "undefined" =>  NaN
// boolean (true) => 1

let isLoggin = "";

let valueInBoolean = Boolean(isLoggin)
console.log(valueInBoolean)

// 1 => true;
// 0 => false;
// "" => false;
// "dhiraj" => true;