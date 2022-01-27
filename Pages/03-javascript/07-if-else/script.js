document.getElementById("burgerResult").style.visibility = "hidden";


function submit() {
    let bread = document.querySelector('input[name="bread"]:checked').value;
    let burger = document.querySelector('input[name="burger"]:checked').value;
    let salad = document.querySelector('input[name="salad"]:checked').value;
    let cheese = document.querySelector('input[name="cheese"]:checked').value;
    let finalPrice = 0;

    if (bread == "Pão Francês") {
        finalPrice = 3.00;
    } else if (bread == "Pão Australiano") {
        finalPrice = 8.00;
    } else {
        finalPrice = 6.00;
    }

    if (burger == "Hamburger de Picanha") {
        finalPrice += 13.00;
    } else if (burger == "Hamburger de Costela") {
        finalPrice += 10.00;
    } else {
        finalPrice += 12.00;
    }

    if (salad == "Alface") {
        finalPrice += 1.50;
    } else if (salad == "Tomate") {
        finalPrice += 1.50;
    } else {
        finalPrice += 0.00;
    }

    if (cheese == "Queijo Mussarela") {
        finalPrice += 3.00;
    } else if (cheese == "Queijo Prato") {
        finalPrice += 8.00;
    } else {
        finalPrice += 6.00;
    }

    finalPrice = finalPrice.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });

    document.getElementById('breadType').innerText = bread;
    document.getElementById('meatType').innerText = burger;
    document.getElementById('saladType').innerText = salad;
    document.getElementById('cheeseType').innerText = cheese;
    document.getElementById('finalPrice').innerText = "Preço Total: " + finalPrice;
    document.getElementById("burgerResult").style.visibility = "visible";
}











































// let bread;
// let meat;
// let salad;
// let cheese;

// document.getElementById("burgerResult").style.visibility = "hidden";

// function saladAlfaceTomate() {
//     document.getElementById('noSalad').checked = false;
// }

// function noSaladAlfaceTomate() {
//     document.getElementById('alface').checked = false;
//     document.getElementById('tomate').checked = false;
// }

// function getInformation() {
//     document.getElementsByName("bread").forEach(function (element) {
//         if (element.checked == true) {
//             bread = (element.value.split(' '));
//         }
//     });
//     document.getElementsByName("burger").forEach(function (element) {
//         if (element.checked == true) {
//             meat = (element.value.split(' '));
//         }
//     });
//     document.getElementsByName("salad").forEach(function (element) {
//         if (element.checked == true) {
//             salad = (element.value.split(' '));
//         }
//     });

//     document.getElementsByName("cheese").forEach(function (element) {
//         if (element.checked == true) {
//             cheese = (element.value.split(' '));
//         }
//     });
// }

// function submit() {
//     getInformation();
//     document.getElementById('breadType').innerText = "Pão: " + bread[0];
//     document.getElementById('priceBread').innerText = "R$ " + bread[1];
//     document.getElementById('meatType').innerText = "Hamburger: " + meat[0];
//     document.getElementById('priceMeat').innerText = "R$ " + meat[1];
//     document.getElementById('saladType').innerText = "Salada: " + salad[0];
//     document.getElementById('priceSalad').innerText = "R$ " + salad[1];
//     document.getElementById('cheeseType').innerText = "Queijo: " + cheese[0];
//     document.getElementById('priceCheese').innerText = "R$ " + cheese[1];
//     document.getElementById('finalPrice').innerText = "Preço final: R$ " + (parseFloat(bread[1]) + parseFloat(meat[1]) + parseFloat(salad[1]) + parseFloat(cheese[1]));
//     document.getElementById("burgerResult").style.visibility = "visible";
// }