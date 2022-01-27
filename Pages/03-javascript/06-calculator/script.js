function calculate(operation) {
    const num1 = parseFloat(document.getElementById("place1").value);
    const num2 = parseFloat(document.getElementById("place2").value);
    let result;
    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "*") {
        result = num1 * num2;
    } else {
        result = num1 / num2;
    }
    document.getElementById("result").innerHTML = result;
}