function add(a,b){
    return +a + +b;
}

function subtract(a,b){
    return +a - +b;
}

function multiply(a,b){
    return +a * +b;
}

function divide(a,b){
    if(b!= 0){
        return +a / +b;
    }
    else
    alert("Cannot divide by 0");
}

function operate(){
    let operator = prompt("Enter operator","")

    let a = prompt("Enter a value","")
    let b = prompt("Enter a value","")
    switch(operator){

        case '+':
            console.log(add(a,b));
            break;
        
        case '-':
            console.log(subtract(a,b));
            break;
        case '*':
            console.log(multiply(a,b));
            break;
            
        case '/':
            console.log(divide(a,b));
            break;
    }
}

//window.onload =  operate;