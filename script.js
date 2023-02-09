const numbers = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operators');
const display1 = document.querySelector('.display1');
const display2 = document.querySelector('.display2');
let firstOperand = '';
let secondOperand = '';
let operator = '';

function operate(){
    const first = parseFloat(firstOperand);
    const second = parseFloat(secondOperand);
    let result;
    switch(operator) {
        case '+':
            result = first + second
            break;
        case '-':
            result = first - second
            break;
        case 'x':
            result = first * second
            break;
        case '/':
            result = first / second
            break;
    }

    secondOperand = result;
    firstOperand = '';
}

function displayValue(){
    display1.textContent = secondOperand;
    display2.textContent = firstOperand;
}

numbers.forEach((button) => {
button.addEventListener('click', () =>{
    if(button.innerText === '' && secondOperand === '')
    return;
    secondOperand += (button.innerText);
    displayValue();
})
})

operators.forEach((button) => {
button.addEventListener('click', () =>{
   if(firstOperand !== '' && operator !== null){
    operate();
    }
    firstOperand = secondOperand;
    secondOperand = '';
    operator = (button.innerText);
    displayValue();
})
})

function clearAll(){
    secondOperand = '';
    firstOperand = '';
    displayValue();
}

function decimal(){
    secondOperand += '.';
}

function equals(){
    operate();
    displayValue();
}