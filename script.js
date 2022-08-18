const btns = document.querySelectorAll("button");
const display = document.getElementById("display");
let num;

function add(a,b){
return a+b;
};

function subtract(a,b){
    return a-b;
};
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function operator(a,b,c){
if(c === 'plus')

return add(a,b);
}
function populate (){

}


function displays (event){
let num = event.currentTarget.className;
let numy = num.textContent;
display.innerHTML = numy;


}



for (var i = 0 ; i < btns.length; i++) {
    btns[i].addEventListener('click' , displays) ; 
 }