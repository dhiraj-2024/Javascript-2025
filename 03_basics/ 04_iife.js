
// Imidiatly invoked function (IIFE)
// use to avoid globle variables polutions 
(function juststart(){
    console.log(`DB connected `)
})();

(function juststart(name){
    console.log(`DB connected ${name}`)
})('dhiaj');