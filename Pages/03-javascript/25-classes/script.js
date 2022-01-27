class calculator {
    operand1 = '';
    operand2 = '';
    operation = '';
    result = '';

    setOperand1(_operand1) {
        this.operand1 += _operand1;
    }

    setOperand2(_operand2) {
        this.operand2 += _operand2;
    }

    setOperation(_operation) {
        this.operation = _operation;
    }

    getResult() {
        calculateResult();
    }

    clearCalculator() {
        this.operand1 = '';
        this.operand2 = '';
        this.operation = '';
        this.result = '';
    }
}

const calc = new calculator;

const clickCalc = document.getElementById("idBtns");
clickCalc.addEventListener("click", clicked);

const displayInfo = document.getElementById("displayInfo");

function clicked(_element) {
    const element = _element.srcElement;
    switch (element.className) {
        case 'numb':
            numbSelector(element);
            
            break;

        case 'numb numb0':
            numbSelector(element);

            break;

        case 'operationSignal':
            setOperationSignal(element);

            break;

        case 'dot':
            setDot(element);

            break;

        case 'clear':
            clearCalculator();
            break;

        case 'percentage':
            if (calc.result) {
                calc.result = Number(calc.result) / 100;
                displayInfo.innerHTML = calc.result;
            }
            break;

        case 'signalChange':
            if (calc.result) {
                calc.result = calc.result * (-1)
                displayInfo.innerHTML = calc.result;
            }
            break;

        case 'equalSignal':
            if (calc.operand1 && calc.operand2 && calc.operation) {
                calc.getResult();
            }
            break

    }

}


function calculateResult() {
    if (calc.operation === `/` && calc.operand2 === '0') {
        clearCalculator();
        displayInfo.innerHTML = "¯\\_(ツ)_/¯";
    }
    else if(calc.operation === `/`) {
        calc.result = Number(calc.operand1) / Number(calc.operand2);
        displayInfo.innerHTML = calc.result;
    }
    else if(calc.operation === `*`) {
        calc.result = Number(calc.operand1) * Number(calc.operand2);
        displayInfo.innerHTML = calc.result;
    }
    else if(calc.operation === `-`) {
        calc.result = Number(calc.operand1) - Number(calc.operand2);
        displayInfo.innerHTML = calc.result;
    }
    else if(calc.operation === `+`) {
        calc.result = Number(calc.operand1) + Number(calc.operand2);
        displayInfo.innerHTML = calc.result;
    }
    
}

function setOperationSignal(_element) {
    const element = _element;
    if (!calc.operation && calc.operand1) {
        calc.operation = element.value;
        displayInfo.innerHTML = element.innerHTML;
    }
}

function setDot(_element) {
    const element = _element;
    if (calc.operation === '' && !calc.operand1.includes('.')) {
        displayInfo.innerHTML += element.value;
        calc.setOperand1(element.value);
    }
    else if (calc.operation !== '' && !calc.operand2.includes('.') && calc.operand2) {
        displayInfo.innerHTML += element.value;
        calc.setOperand2(element.value);
    }
    else if (calc.operation !== '' && !calc.operand2.includes('.') && !calc.operand2) {
        displayInfo.innerHTML = '0' + element.value;
        calc.setOperand2(element.value);
    }
}

function numbSelector(_element) {
    const element = _element;
    if (calc.operation === '') {
        if (displayInfo.innerHTML === "0" || displayInfo.innerHTML === "¯\\_(ツ)_/¯") {
            displayInfo.innerHTML = element.value;
            calc.setOperand1(element.value);
        }
        else {
            displayInfo.innerHTML += element.value;
            calc.setOperand1(element.value);
        }
    }
    else {
        if (!calc.operand2) {
            displayInfo.innerHTML = element.value;
            calc.setOperand2(element.value);
        }
        else {
            displayInfo.innerHTML += element.value;
            calc.setOperand2(element.value);
        }
    }
}

function clearCalculator() {
    displayInfo.innerHTML = "0";
    calc.clearCalculator();
}