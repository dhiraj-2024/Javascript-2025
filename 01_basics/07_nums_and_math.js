const score = 400.343;
// console.log(typeof score);

const balance = new Number (100);
// console.log(balance);

// console.log(balance.toFixed(2));
// console.log(balance.toString().length);
// console.log(balance.toExponential(4));
// console.log(score.toPrecision(5));

const oneValue = 100330;
// console.log(oneValue.toLocaleString('en-IN')); //indian 

Number.MAX_VALUE
Number.MIN_VALUE


// ++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-87));
// console.log(Math.ceil(7.2));
// console.log(Math.floor(7.9));
// console.log(Math.round(45.234));
// console.log(Math.sqrt(36));
// console.log(Math.min(3,5,8,2,7,9,22));
// console.log(Math.max(3,5,8,2,7,9,22));

console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.random()*10+1);
console.log(Math.floor(Math.random()*10+1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min);