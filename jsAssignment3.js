let firstNum = document.getElementById("firstNum");  //First Number
let secondNum = document.getElementById("secondNum"); //Second Number
let result = document.getElementById("result"); //result input


let add = document.getElementById("addition");  //addition
let sub = document.getElementById("subtraction"); //subtraction
let multiply = document.getElementById("multiply"); //multiply
let divide = document.getElementById("divide");   // divide
let modulu = document.getElementById("modulu");  //modulu





// Addition
add.addEventListener("click", () => {

    console.log(parseInt(firstNum.value) + parseInt(secondNum.value));

    let finalresult = parseInt(firstNum.value) + parseInt(secondNum.value);

    result.value = finalresult ;
    
})


// Subtraction
sub.addEventListener("click", () => {

    console.log(parseInt(firstNum.value) - parseInt(secondNum.value));

    let finalresult = parseInt(firstNum.value) - parseInt(secondNum.value);

    result.value = finalresult ;

})



// multiply
multiply.addEventListener("click", () => {

    console.log(parseInt(firstNum.value) * parseInt(secondNum.value));

    let finalresult = parseInt(firstNum.value) * parseInt(secondNum.value);

    result.value = finalresult ;

})


// divide
divide.addEventListener("click", () => {

    console.log(parseInt(firstNum.value) / parseInt(secondNum.value));

    let finalresult = parseInt(firstNum.value) / parseInt(secondNum.value);

    result.value = finalresult.toFixed(2) ;

})


// modulu
modulu.addEventListener("click", () => {

    console.log(parseInt(firstNum.value) % parseInt(secondNum.value));

    let finalresult = parseInt(firstNum.value) % parseInt(secondNum.value);

    result.value = finalresult;

})


