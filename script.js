// store user input and display it on screen

let array = [];
storeAndDisplay();



// create basic operation with two variables

let a = 3;
let b = 2;
let operator = 'X';



function storeAndDisplay() {
    document.querySelectorAll('#buttons').forEach((button) => {
        button.addEventListener('click', (event) => {
            let variable = event.target.textContent;
            array.push(variable);
        })
    });
    document.querySelector('#screenText').innerHTML = array;
}


function operation(a, b, operator) {
    if (operator == '+') {
        return a + b;
    } else if (operator == '-') {
        return a - b;
    } else if (operator == 'X') {
        return a * b;
    } else if (operator == '÷') {
        return a / b;
    }
}