let bread;
let meat;
let salad;
let cheese;

document.getElementById("burgerResult").style.visibility = "hidden";

function saladAlfaceTomate() {
    document.getElementById('noSalad').checked = false;
}

function noSaladAlfaceTomate() {
    document.getElementById('alface').checked = false;
    document.getElementById('tomate').checked = false;
}

function getInformation() {
    document.getElementsByName("bread").forEach(function (element) {
        if (element.checked == true) {
            bread = (element.value.split(' '));
        }
    });
    document.getElementsByName("burger").forEach(function (element) {
        if (element.checked == true) {
            meat = (element.value.split(' '));
        }
    });
    document.getElementsByName("salad").forEach(function (element) {
        if (element.checked == true) {
            salad = (element.value.split(' '));
        }
    });

    document.getElementsByName("cheese").forEach(function (element) {
        if (element.checked == true) {
            cheese = (element.value.split(' '));
        }
    });
}

function submit() {
    getInformation();
    document.getElementById('breadType').innerText = "Pão: " + bread[0];
    document.getElementById('priceBread').innerText = "R$ " + bread[1];
    document.getElementById('meatType').innerText = "Hamburger: " + meat[0];
    document.getElementById('priceMeat').innerText = "R$ " + meat[1];
    document.getElementById('saladType').innerText = "Salada: " + salad[0];
    document.getElementById('priceSalad').innerText = "R$ " + salad[1];
    document.getElementById('cheeseType').innerText = "Queijo: " + cheese[0];
    document.getElementById('priceCheese').innerText = "R$ " + cheese[1];
    document.getElementById('finalPrice').innerText = "Preço final: R$ " + (parseFloat(bread[1]) + parseFloat(meat[1]) + parseFloat(salad[1]) + parseFloat(cheese[1]));
    document.getElementById("burgerResult").style.visibility = "visible";
}