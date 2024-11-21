let inone = document.getElementById("inone");
let intwo = document.getElementById("intwo");

let plus = document.getElementById("plus");
let minuse = document.getElementById("minuse");
let divide = document.getElementById("divide");
let mul = document.getElementById("mul");

let div = document.getElementById("div");


function clearinput(){
    inone.value = "";
    intwo.value = "";
};


plus.addEventListener("click",function(){
    let num1 = parseFloat(inone.value);
    let num2 = parseFloat(intwo.value);
    let res = num1 + num2 ;
    div.textContent = res;
    clearinput();
});

minuse.addEventListener("click", function(){
    let num1 = parseFloat(inone.value);
    let num2 = parseFloat(intwo.value);
    let res = num1 - num2;
    div.textContent = res;
    clearinput();
});

mul.addEventListener("click", function(){
    let num1 = parseFloat(inone.value);
    let num2 = parseFloat(intwo.value);
    let res = num1 * num2;
    div.textContent = res;
    clearinput();
});



divide.addEventListener("click", function(){
    let num1 = parseFloat(inone.value);
    let num2 = parseFloat(intwo.value);
    if(num2 === 0){
        div.textContent = "error zero is not divide by zero";
    }else{
        let res = num1 / num2;
        div.textContent = res;
        clearinput();
    }
});

