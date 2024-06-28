

document.addEventListener('DOMContentLoaded', function(){
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let displayValue = '0';
    let pendingValue = null;
    let operator = null;


function updateDisplay(){
    display.textContent = displayValue;
}


function handleNumber(number){
    if(displayValue === '0'){
        displayValue = number;
    } else{
        displayValue += number;
    }

    updateDisplay();
}


function handleOperator(nextOperator){
    if (pendingValue === null){
        pendingValue = parseFloat(displayValue);
    } else if (operator){
        const result = performCalculation(pendingValue, parseFloat(displayValue), operator);
        displayValue = `${result}`;
        pendingValue = result;}

        displayValue = '0';
        operator = nextOperator;
        updateDisplay();
    };


function performCalculation(a,b,operator){
    switch (operator) {
        case '+':
            return a+b;
         break;

        case '-':
            return a-b;
         break;

        case '*':
            return a*b;
         break;

        case '/':
            return b === 0 ?'ERROR!!!': a/b.toFixed(4)
                break;

        default:
            return b;
          break;
        
    }
}

function handleEqual(){
    if (pendingValue !== null && operator !== null){
        displayValue = `${performCalculation(pendingValue, parseFloat(displayValue), operator)}`;
        pendingValue = null;
        operator = null;
        updateDisplay();}
    }


function handleClear() {
    displayValue = '0';
    pendingValue = null;
    operator = null;
    updateDisplay();
    
}

buttons.forEach(button => {
    button.addEventListener('click' , function(){
        const value = this.getAttribute('data-value');
        if(!isNaN(value) || value ==='.'){
            handleNumber(value);
        } else if (['+', '-', '*', '/'].includes(value)){
            handleOperator(value);
        } else if (value === '='){
            handleEqual();
        } else if(value ==='CLEAR'){
            handleClear();
        }
    });
    
});

updateDisplay();

});