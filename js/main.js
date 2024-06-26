let expression = document.getElementById("display")
function clearResult() {
    expression.value =""
}

function displayToScreen(value) {
    expression.value += value;
    let numbers;
    if(operator == '+') {
        numbers = expression.split('+');
        let result = parseFloat(numbers[0]) + parseFloat(numbers[1]);
        document.getElementById('display').value = result;
    }
    else if (operator == '-') {
        numbers = expression.split('-');
        let result = parseFloat(numbers[0]) - parseFloat(numbers[1]);
        document.getElementById('display').value = result;
    }
    else if (operator == '*') {
        numbers = expression.split('*');
        let result = parseFloat(numbers[0]) * parseFloat(numbers[1]);
        document.getElementById('display').value = result;
    }
    else if (operator == '/'){
        numbers = expression.split('/');
        let result = parseFloat(numbers[0]) / parseFloat(numbers[1]);
        document.getElementById('display').value = result;
    }
    else if (operator == '%'){
        
        let result = parseFloat / 100;
        document.getElementById('display').value = result;
    }
    else if (operator == "sin") {
        let angle = parseFloat(document.getElementById('display').value);
        let result = angle(Math.sin * Math.PI/180);
        document.getElementById('display').value = result;
    }
}


function result() {
    let expression = document.getElementById('display').value;
    let calc = eval(expression);
    if (Number.isFinite(calc)){
        document.getElementById('display').value = calc;
    }
    else {
        document.getElementById('display').value = 'Math Error'
    }
   

}