const game = [[false, false, false], [false, false, false], [false, false, false]]
let count = 0;
let victoryFinal = 0;

function check(val) {
    if (victoryFinal == 0) {
        let vic;
        if (count % 2 == 0 && document.getElementById("x" + val).textContent === "") {
            document.getElementById("x" + val).innerHTML = "O";
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    const x = (i + 1).toString() + (j + 1);
                    if (x == val) {
                        game[i][j] = 1;
                        vic = verify(1);
                        if (vic == 1) {
                            document.getElementById("winner").innerHTML = 'O player "O" ganhou!!';
                            victoryFinal = 1;
                        }
                    }
                }
            }
            count++;
        }
        else if (count % 2 != 0 && document.getElementById("x" + val).textContent === "") {
            document.getElementById("x" + val).innerHTML = "X";
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    const x = (i + 1).toString() + (j + 1);
                    if (x == val) {
                        game[i][j] = 2;
                        vic = verify(2);
                        if (vic == 1) {
                            document.getElementById("winner").innerHTML = 'O player "X" ganhou!!';
                            victoryFinal = 1;
                        }
                    }
                }
            }
            count++;
        }
    }
}


function verify(result) {
    let victory = 0;
    let x = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (game[i][j] === result) {
                x++;
                if (x == 3) {
                    victory = 1;
                }
                if (j == 2) {
                    x = 0;
                }
            }
            else {
                x = 0;
            }
        }
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (game[j][i] === result) {
                x++;
                if (x == 3) {
                    victory = 1;
                }
                if (j == 2) {
                    x = 0;
                }
            }
            else {
                x = 0;
            }
        }
    }
    if (((game[0][0] == 1 && game[1][1] == 1 && game[2][2] == 1) || (game[0][2] == 1 && game[1][1] == 1 && game[2][0] == 1)) || ((game[0][0] == 2 && game[1][1] == 2 && game[2][2] == 2) || (game[0][2] == 2 && game[1][1] == 2 && game[2][0] == 2)) ) {
        victory = 1;
    }
    
    return victory;
}


function resetGame() {
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            game[i][j] = false;
            document.getElementById("x" + (i+1) + (j+1)).innerHTML = "";
            document.getElementById("winner").innerHTML = "";
            victoryFinal = 0;
            count = 0;
        }
    }
}