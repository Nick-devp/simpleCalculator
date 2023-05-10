let addition=document.getElementById("addition");
let substraction=document.getElementById("substraction");
let muitipication=document.getElementById("muitipication");
let division=document.getElementById("division");
let reset=document.getElementById("reset");
// Values 
let value1=document.getElementById("val1");
let value2=document.getElementById("val2");
//Outcome
let outcome=document.getElementById("outcome");

//Defining functions
function add(){
    if (value1.value===""|| value2.value===""){
        alert("please Enter Value")
    }
    let result=parseInt(value1.value)+parseInt(value2.value);
    outcome.textContent=result;
}
function sub(){
    if (value1.value===""|| value2.value===""){
        alert("please Enter Value")
    }
    let result=parseInt(value1.value)-parseInt(value2.value);
    outcome.textContent=result;
}
function multi(){
    if (value1.value===""|| value2.value===""){
        alert("please Enter Value")
    }
    let result=parseInt(value1.value)*parseInt(value2.value);
    outcome.textContent=result;
}
function divi(){
    if (value1.value===""|| value2.value===""){
        alert("please Enter Value")
    }
    let result=parseInt(value1.value)/parseInt(value2.value);
    outcome.textContent=result;
}
function setAgain(){
    outcome.textContent="0";
    value1.value="";
    value2.value="";
}

addition.addEventListener("click",add)
substraction.addEventListener("click",sub)
muitipication.addEventListener("click",multi)
division.addEventListener("click",divi)
reset.addEventListener("click",setAgain)