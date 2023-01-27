let showButton = document.querySelectorAll(".show-button");
let display = document.querySelector("#calc-display")
let operator = document.querySelectorAll(".operators")

showButton.forEach(button => {
    button.addEventListener("click", getInput);
});


function getInput(e){
    display.innerText += e.target.innerText; 
    let value = display.innerText;

    getExpression(value);
}


function getExpression(expression){


    position = expression.search(/[+-/X]/);
    a = expression.slice(0,position);
    b = expression.slice(position+1, expression.length);
    op = expression.charAt(position);

    operate(a,b,op);
}

//Operations

function operate(a,b,op){

    switch(op){

        case '+':
            console.log(add(a,b));
            break;
        
        case '-':
            console.log(subtract(a,b));
            break;
        case 'X':
            console.log(multiply(a,b));
            break;
            
        case '/':
            console.log(divide(a,b));
            if(b=='0'){
                display.innerText = "Are you mad or what?";
            }
            break;
    }
}

//Calculation

function add(a,b){
    return Number(a) + Number(b);
}

function subtract(a,b){
    return Number(a) - Number(b);
}

function multiply(a,b){
    return Number(a) * Number(b);
}

function divide(a,b){
    
    return Number(a) / Number(b);

}