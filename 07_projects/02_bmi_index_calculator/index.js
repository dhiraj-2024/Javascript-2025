const form = document.querySelector("form");
let bmi 
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const suggest = document.getElementById("suggest");

    bmi = (weight / ((height / 100) ** 2)).toFixed(2);


    if (!height || height <= 0 || isNaN(height) || !weight || weight <= 0 || isNaN(weight)) {
        suggest.innerHTML = `<span>Please Enter Valid Details : 🤠</span>`;   
    } else{
        bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    }
     if (bmi<=18.6) {
        suggest.innerHTML = `<span>Your BMI is : ${bmi} </br> You are Under Weight</span>`;   
    } 
     else if (bmi > 18.6 && bmi < 24.6) {
        suggest.innerHTML = `<span>Your BMI is : ${bmi} </br> You are Weight is Normal</span>`;   
    }
    else {
      suggest.innerHTML = `<span>Your BMI is : ${bmi} </br> You are Over Weight </span>`;   

    }



});
