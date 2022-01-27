
let divHeight = document.querySelector(".punish").offsetHeight;

function submitData() {
    const digit = parseInt(document.getElementById("quantity").value);
    const frase = " Um arroto não é projeto de ciências.".split("");
    console.log(frase.length);
    let count = 0;
    let n;
    while (count < digit){
    n = 0;
        while (n < 37){
            document.getElementById("frases").innerHTML += frase[n];
            if (document.getElementById("frases").offsetHeight > document.querySelector(".frasesContainer").offsetHeight)
            n++;
        }
    count++;
    }
}

console.log(document.querySelector(".frasesContainer").offsetHeight);