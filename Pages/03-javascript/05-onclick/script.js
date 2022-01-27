const ids = document.querySelectorAll(".stars");
const svgs = document.querySelectorAll(".starfill");
const avaliations = document.querySelector(".avaliations");
const sweet = [
    "assets/icons/sweet0.png",
    "assets/icons/sweet1.png",
    "assets/icons/sweet2.png",
    "assets/icons/sweet3.png",
    "assets/icons/sweet4.png",
    "assets/icons/sweet5.png",
    "assets/icons/sweet6.png",
    "assets/icons/sweet7.png",
    "assets/icons/sweet8.png",
    "assets/icons/sweet9.png",
    "assets/icons/sweet10.png",
];

let count = 0;

let total;

function star(n){

    for (i = 0; i < 10; i++) {
        total = 0;
        let element = ids[i];
        let element2 = svgs[i];
        if(i < n){
            element.checked = true;
            element2.setAttribute("fill", "rgba(231,133,133)");
        }else {
            element.checked = false;
            element2.setAttribute("fill", "rgb(100, 100, 100)");
        }
    }
}

function fillRate(classification) {
    let section = document.querySelector(".avaliations");
    let div = document.createElement("div");
    div.className = classification;
    div.id = "caixaResposta" + count;
    section.appendChild(div);
    total = 0;
    for (i = 0; i < 10; i++) {
        let element = ids[i];
        if (element.checked == true) {
            total++;
        }
    }
}

function printValue() {
    var classification = document.getElementById("name").value;
    classification = classification.replaceAll(' ', '');
    fillRate(classification);
    let rate = total;
    let name = document.getElementById("name").value;
    let rateUser = sweet[total];
    let comment = document.getElementById("comment").value;
    let newElement = document.createElement('p');
    let addText = document.createTextNode("Avaliação: ");
    newElement.appendChild(addText);
    document.getElementById("caixaResposta" + count).appendChild(newElement);
    newElement = document.createElement('p');
    addText = document.createTextNode("Nome: " + name);
    newElement.appendChild(addText);
    document.getElementById("caixaResposta" + count).appendChild(newElement);
    newElement = document.createElement('p');
    addText = document.createTextNode("Nota: ");
    newElement.appendChild(addText);
    document.getElementById("caixaResposta" + count).appendChild(newElement);
    let newElement2 = document.createElement('img');
    newElement2.src = rateUser;
    document.getElementById("caixaResposta" + count).appendChild(newElement2);
    newElement = document.createElement('p');
    addText = document.createTextNode("Comentário: " + comment);
    newElement.appendChild(addText);
    document.getElementById("caixaResposta" + count).appendChild(newElement);
    // newElement = document.createElement('p');
    // addText = document.createTextNode(comment);
    // newElement.appendChild(addText);
    // document.getElementById("caixaResposta" + count).appendChild(newElement);
    count++;
}