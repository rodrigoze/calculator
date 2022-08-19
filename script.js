const btns = document.querySelectorAll("[data-number]");
const o = document.querySelectorAll("[operator]");
const display = document.getElementById("display");
const displayz = document.getElementById("displayz");

let firstNum= [];
let secNum= [];
let result =[];

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

function operator(event){
if(c === 'plus')
return add(a,b);
}

function populate (event){
    if(event.currentTarget.textContent === 'Clear')
    {
        display.innerHTML = '';
        result=[];
    }
    else if(event.currentTarget.textContent === '=')
    {
        result[2] =firstNum.join('');
        firstNum = [];
        let a = +result[0];
        let b = +result[2];
        
        if(result[1]=== '+'){
            result[20] = a + b;
        }
        else if (result[1] === '-' )
        {
            result[20] = a-b;
        }
        else if( result[1]==='x'){
            result[20] = a*b;
        }
        else if(result[1]===':')
        {
            result[20] = a/b;
        }
        
        display.innerHTML = result[20];    
    }
    
    else {
    let op=event.currentTarget.textContent;
    result[0] =firstNum.join('');
    result[1] =op;
    display.innerHTML = op;
    firstNum=[];
    }
}

const displays= (event) => {

let num = event.currentTarget.textContent;
firstNum.push(num);
let first = firstNum.join('');
display.innerHTML = first;

}

for (var i = 0 ; i < btns.length; i++) {
    btns[i].addEventListener('click' , displays) ; 
 }

 for (var j = 0 ; j < o.length; j++) {
    o[j].addEventListener('click' , populate) ; 
 }
