// for loop

for (let index = 0; index <= 10; index++) {
    const element = index;
    // console.log(element)
    
}


for (let i = 0; i <= 10; i++) {
    const element = i;
    if(i == 5){
        // console.log(`${i} is the best numver`)
    }
    // console.log(element)
}


for (let i = 0; i <= 10; i++) {
    // console.log(`${i} outer loop i `)

    for (let j = 0; j <= 10; j++) {
        // console.log(`${j} inner loop j and outer loop ${i}`)
        
        // console.log(`${i} * ${j} = ${i*j}`) // print tables upto 10
    }
}
 
const myarray =["dhiraj","suyog","pramod","karan"]

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element)
    
}


// ************* BREAK AND CONTINUE****************

for (let index = 0; index <= 30; index++) {
    if(index == 19){
        // console.log("break the loop")
        break // print upto 18 and then stop the loop
    }
    // console.log(index)
    const element = index;
    
}

for (let index = 0; index <= 30; index++) {
    if(index == 5){
        console.log("checked and continue")
        continue
    }
    console.log(index)
    const element = index;
    
}