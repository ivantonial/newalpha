let arrayNumbers = [0, 0, 0, 0];

function saveMemo() {
    const v1 = parseFloat(document.getElementById("value01").value);
    document.getElementById("memo01").innerHTML = v1;
    const v2 = parseFloat(document.getElementById("value02").value);
    document.getElementById("memo02").innerHTML = v2;
    const v3 = parseFloat(document.getElementById("value03").value);
    document.getElementById("memo03").innerHTML = v3;
    const v4 = parseFloat(document.getElementById("value04").value);
    document.getElementById("memo04").innerHTML = v4;
    arrayNumbers = [v1, v2, v3, v4]
}

function lolFunc() {
    const numOne = parseFloat(document.getElementById("value01").value);
    const numTwo = parseFloat(document.getElementById("value02").value);
    const numThree = parseFloat(document.getElementById("value03").value);
    const numFour = parseFloat(document.getElementById("value04").value);
    document.getElementById("value01").value = numFour;
    document.getElementById("value02").value = numThree;
    document.getElementById("value03").value = numTwo;
    document.getElementById("value04").value = numOne;
}

function sortValues() {
    let valOne = arrayNumbers[0];
    let valTwo = arrayNumbers[1];
    let valThree = arrayNumbers[2];
    let valFour = arrayNumbers[3];
    let final01;
    let final02;
    let final03;
    let final04;

    if (valOne < valTwo && valOne < valThree && valOne < valFour) {
        final01 = valOne;
        if (valTwo < valThree && valTwo < valFour) {
            final02 = valTwo;
            if (valThree < valFour){
                final03 = valThree;
                final04 = valFour;
            }
            else {
                final03 = valFour;
                final04 = valThree;
            }
        }
        else if (valThree < valTwo && valThree < valFour) {
            final02 = valThree;
            if (valTwo < valFour){
                final03 = valTwo;
                final04 = valFour;
            }
            else {
                final03 = valFour;
                final04 = valTwo;
            }
        }
        else {
            final02 = valFour;
            if (valTwo < valThree){
                final03 = valTwo;
                final04 = valThree;
            }
            else {
                final03 = valThree;
                final04 = valTwo;
            }
        }
    }
    else if (valTwo < valOne && valTwo < valThree && valTwo < valFour) {
        final01 = valTwo;
        if (valOne < valThree && valOne < valFour) {
            final02 = valOne;
            if (valThree < valFour) {
                final03 = valThree;
                final04 = valFour;
            }
            else {
                final03 = valFour;
                final04 = valThree;
            }
        }
        else if (valThree < valOne && valThree < valFour) {
            final02 = valThree;
            if (valOne < valFour) {
                final03 = valOne;
                final04 = valFour;
            }
            else {
                final03 = valFour;
                final04 = valOne;
            }
        }
        else {
            final02 = valFour;
            if (valOne < valThree) {
                final03 = valOne;
                final04 = valThree;
            }
            else {
                final03 = valThree;
                final04 = valOne;
            }
        }
    }
    else if (valThree < valOne && valThree < valTwo && valThree < valFour) {
        final01 = valThree;
        if (valOne < valTwo && valOne < valFour) {
            final02 = valOne;
            if (valTwo < valFour){
                final03 = valTwo;
                final04 = valFour;
            }
            else {
                final03 = valFour;
                final04 = valTwo;
            }
        }
        else if (valTwo < valOne && valTwo < valFour) {
            final02 = valTwo;
            if (valOne < valFour) {
                final03 = valOne;
                final04 = valFour;
            }
            else {
                final03 = valFour;
                final04 = valOne;
            }
        }
        else {
            final02 = valFour;
            if (valOne < valTwo){
                final03 = valOne;
                final04 = valTwo;
            }
            else {
                final03 = valTwo;
                final04 = valOne;
            }
        }
    }

    else {
        final01 = valFour;
        if (valOne < valTwo && valOne < valThree) {
            final02 = valOne;
            if (valTwo < valThree) {
                final03 = valTwo;
                final04 = valThree;
            }
            else {
                final03 = valThree;
                final04 = valTwo;
            }
        }
        else if (valTwo < valOne && valTwo < valThree) {
            final02 = valTwo;
            if (valOne < valThree) {
                final03 = valOne;
                final04 = valThree;
            }
            else {
                final03 = valThree;
                final04 = valOne;
            }
        }
        else {
            final02 = valThree;
            if (valOne < valTwo) {
                final03 = valOne;
                final04 = valTwo;
            }
            else {
                final03 = valTwo;
                final04 = valOne;
            }
        }
    }

    arrayNumbers = [final01, final02, final03, final04];

    document.getElementById("finalValue01").innerHTML = arrayNumbers[0];
    document.getElementById("finalValue02").innerHTML = arrayNumbers[1];
    document.getElementById("finalValue03").innerHTML = arrayNumbers[2];
    document.getElementById("finalValue04").innerHTML = arrayNumbers[3];
    
}