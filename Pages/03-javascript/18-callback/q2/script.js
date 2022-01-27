let count;
const chosenNumbers = [];
let interval;


//impressão
function callback(number) {
    document.getElementById('number' + count).innerHTML = number;
    count++;
    chosenNumbers.push(number);
    if (count == 6) {
        document.getElementById('btnChoosing').style.visibility = "visible";
        clearInterval(interval);
    }
}

//choosing a number
function choosing() {
    chosenNumbers.splice(0, chosenNumbers.length);
    count = 0;
    document.getElementById('btnChoosing').style.visibility = "hidden";
    clearOldNumbers();
    interval = setInterval(verifying, 1000);
}

function clearOldNumbers() {
    for (let i = 0; i < 6; i++) {
        document.getElementById('number' + i).innerHTML = "";
    }
}

//verifying a number
function verifying() {
    if (count < 6) {
        let num = Math.floor(Math.random() * 60 + 1);
        let compare = true;
        if (count > 0) {
            while (compare) {
                compare = false;
                chosenNumbers.forEach((element) => {
                    if (element == num) {
                        num = Math.floor(Math.random() * 60 + 1);
                        console.log('repetiu: ' + num);
                        compare = true;
                    }
                });
            }
        }
        callback(num);
        console.log(chosenNumbers);
    }
}

