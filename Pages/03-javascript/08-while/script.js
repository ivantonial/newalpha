

function submitData() {
    const digit = parseInt(document.getElementById("quantity").value);
    const frase = "Um arroto não é projeto de ciências.";
    let erased = 0;
    let countFrases = 0;
    let count = 0;
    let newElement;
    while (count < digit){
        if (countFrases == 22){
            document.getElementById("frases").innerHTML = " ";
            countFrases = 0;
            erased++;
            document.getElementById("counter").innerHTML = "O quadro foi apagado " + erased + " vezes";
        }
        newElement = document.createElement("p");
        newElement.className = "beauty";
        newElement.innerText = frase;
        document.getElementById("frases").appendChild(newElement);

        countFrases++;
        
    count++;
    }
}
