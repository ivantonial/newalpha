const carOne = [150, 230, 0.03, "Pedro"];
const carTwo = [120, 260, 0.05, "Juca"];
const carThree = [180, 220, 0.01, "Edna"];

function raceResult() {
    // Receive numbers of laps
    let numberLaps = document.querySelector('input[name="race"]:checked').value;
    let winners = [[0, "Pedro"], [0, "Juca"], [0, "Edna"]];
    let totalLaps = 0;
    for (let i = 0; i < numberLaps; i++) {
        let speedCarOne = speedCar(carOne[0], carOne[1], carOne[2]);
        let speedCarTwo = speedCar(carTwo[0], carTwo[1], carTwo[2]);
        let speedCarThree = speedCar(carThree[0], carThree[1], carThree[2]);

        if (speedCarOne == speedCarTwo && speedCarOne == speedCarThree) {
            winners[0][0]++;
            winners[1][0]++;
            winners[2][0]++;
        }
        else if (speedCarOne == speedCarTwo && speedCarOne > speedCarThree) {
            winners[0][0]++;
            winners[1][0]++;
        }
        else if (speedCarOne > speedCarTwo && speedCarOne == speedCarThree) {
            winners[0][0]++;
            winners[2][0]++;
        }
        else if (speedCarTwo == speedCarThree && speedCarTwo > speedCarOne) {
            winners[1][0]++;
            winners[2][0]++;
        }
        else if (speedCarOne > speedCarTwo && speedCarOne > speedCarThree) {
            winners[0][0]++;
        }
        else if (speedCarOne < speedCarTwo && speedCarTwo > speedCarThree) {
            winners[1][0]++;
        }
        else {
            winners[2][0]++;
        }

        if (i == numberLaps - 1) {
            if (winners[0][0] == winners[1][0] || winners[0][0] == winners[2][0] || winners[1][0] == winners[2][0]) {
                i--;
            }
        }
        totalLaps++;
    }

    let winner = [];
    if (winners[0][0] > winners[1][0] && winners[0][0] > winners[2][0]) {
        winner.push(winners[0][0]);
        winner.push(winners[0][1]);
    }
    else if (winners[0][0] < winners[1][0] && winners[1][0] > winners[2][0]) {
        winner.push(winners[1][0]);
        winner.push(winners[1][1]);
    }
    else {
        winner.push(winners[2][0]);
        winner.push(winners[2][1]);
    }
    document.getElementById("divResult").style.visibility = "visible";
    document.getElementById("resultLaps").innerHTML = "A corrida teve: " + totalLaps + " voltas.";
    document.getElementById("resultWinner").innerHTML = "O vencedor foi " + winner[1] + " , sendo mais rápido em " + winner[0] + " voltas.";

}


function speedCar(max, min, skid) {
    let maxSpeed;
    maxSpeed = Math.random() * (max - min) + min;
    return maxSpeed - (maxSpeed * skid);
}












































