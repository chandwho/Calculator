let currentOperand = previousOperand = op = "";


const numberButtons = document.querySelectorAll('.number-buttons');
const operatorButtons = document.querySelectorAll('.operator-buttons');
const previousDisplayOperand = document.querySelector('#previous-display-operand');
const currentDisplayOperand = document.querySelector('#current-display-operand');
const equalButton = document.querySelector('#equal-button');
const clearButton = document.querySelector('#clear-button');
const backButton = document.querySelector('#back-button');

numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        numberInput(e.target.textContent);
    })
});

function numberInput(number){
    if(number == '.' && currentOperand.includes('.')){
        return
    }

    currentOperand += number;
    currentDisplayOperand.textContent = currentOperand;

}


operatorButtons.forEach(button => {

    button.addEventListener('click', (e) => {
        operatorInput(e.target.textContent);
    })
});

function operatorInput(operator){
    
    if(op != ''){
        previousOperand = operate(parseFloat(previousOperand), parseFloat(currentOperand), op);
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


equalButton.addEventListener("click", ()=>{

    if(currentOperand != "" && previousOperand !="" && op !="") //Prevents successive input of '='
    displayResult();
});

function displayResult(){
    //previousDisplayOperand.textContent = previousOperand + op + currentOperand; //shows complete expression on top
    currentOperand = operate(parseFloat(previousOperand), parseFloat(currentOperand), op);
    currentDisplayOperand.textContent = currentOperand.toString();
    op = ""
    console.log(previousOperand)
    console.log(currentOperand)
}

clearButton.addEventListener("click",()=>{

    currentDisplayOperand.textContent = "";
    previousDisplayOperand.textContent = "";
    currentOperand = "";
    previousOperand = "";
    op = "";
});

backButton.addEventListener("click", ()=>{
    if(currentOperand == "") return
    currentOperand  = currentOperand.slice(0,-1)
    currentDisplayOperand.textContent = currentOperand;
});

//Operations

function operate(a,b,op){

    switch(op){

        case '+':
            return Math.round((a * 10000) + (b * 10000))/10000;
            break;
        
        case '-':
            return Math.round((a * 10000) - (b * 10000))/10000;
            break;
        case 'x':
            return Math.round((a * 10000) * (b * 10000))/10000;
            break;
            
        case '÷':
            if(b=='0'){
            return "Are you mad or what?";
            }
            return Math.round((a * 10000) / (b * 10000))/10000;
            
            break;
    }
}


//Pending fixes--> 
// 2. Entering of operators in succession
// 3. Entering of = in succession
// 4. Length/rounding-off of input
// 5. Add keyboard support