let currentOperand = previousOperand = op = "";


const numberButtons = document.querySelectorAll('.number-buttons');
const operatorButtons = document.querySelectorAll('.operator-buttons');
const previousDisplayOperand = document.querySelector('#previous-display-operand');
const currentDisplayOperand = document.querySelector('#current-display-operand');
const equalButton = document.querySelector('#equal-button');
const clearButton = document.querySelector('#clear-button');
const backButton = document.querySelector('#back-button');

//Input numbers
numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        numberInput(e.target.textContent);
    })
});

function numberInput(number){
    if(number == '.' && currentOperand.includes('.')){
        return
    }
    if(currentOperand.length<9){
    currentOperand += number;
    currentDisplayOperand.textContent = currentOperand;
    }
}

//Operator input and display numbers on screen

operatorButtons.forEach(button => {
   
        button.addEventListener('click', (e) => {
            if(currentOperand!= "" && currentOperand!= undefined ) //prevents successive input of operators
            operatorInput(e.target.textContent);
        })

});

function operatorInput(operator){
    
    if(op != ''){
        previousOperand = operate(previousOperand, currentOperand, op);
        op = operator;
        previousDisplayOperand.textContent = previousOperand.toString() + op;
    }

    //Unable to display whole expression on the currentDisplayOperand
    else{
    op = operator;  
    previousOperand = currentOperand; 
    }
    currentOperand = "";
    previousDisplayOperand.textContent = previousOperand + op;
    currentDisplayOperand.textContent = currentOperand;
}


//Final result after pressing '='
equalButton.addEventListener("click", ()=>{

    if(currentOperand != "" && previousOperand !="" && op !="") //Prevents successive input of '='
    displayResult();
});

function displayResult(){
    previousDisplayOperand.textContent = previousOperand + op + currentOperand; //shows complete expression on top
    currentOperand = operate(previousOperand, currentOperand, op);
    currentDisplayOperand.textContent = currentOperand.toString();
    op = "";
}


//Clear screen
clearButton.addEventListener("click", clearScreen);

function clearScreen(){
currentDisplayOperand.textContent = "";
previousDisplayOperand.textContent = "";
currentOperand = "";
previousOperand = "";
op = "";
}

backButton.addEventListener("click", ()=>{
    if(currentOperand == "") return
    currentOperand  = currentOperand.slice(0,-1)
    currentDisplayOperand.textContent = currentOperand;
});

//Calculation

function operate(a,b,op){

    switch(op){

        case '+':
            return Math.round((a * 1000000) + (b * 1000000))/1000000;
        
        case '-':
            return Math.round((a * 100000) - (b * 100000))/100000;

        case 'x':
            return Math.round((a * 100000) * (b * 100000))/10000000000;
            
        case '÷':
            if(b== '0'){
            currentDisplayOperand.textContent = "Are you mad or what?";
            previousDisplayOperand.textContent = ""
            currentOperand = previousOperand;
            previousOperand = "";
            op = ""
            return;
            }
            return Math.round((a * 100000) / (b * 100000))/100000;         
    }
}


//Pending fixes--> 

// 1. Add keyboard support
// 2. Initial no. on display should be "0"