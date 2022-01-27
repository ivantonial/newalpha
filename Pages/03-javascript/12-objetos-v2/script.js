// const carOne = [150, 230, 0.03, "Pedro"];
// const carTwo = [120, 260, 0.05, "Juca"];
// const carThree = [180, 220, 0.01, "Edna"];

function raceResult() {
    // Receive numbers of laps
    let numberLaps = document.querySelector('input[name="race"]:checked').value;
    let winners = [[0, "Pedro"], [0, "Juca"], [0, "Edna"]];
    let totalLaps = 0;
    const speedCarPedro = randomCar(Math.random(), "Pedro");
    const speedCarJuca = randomCar(Math.random(), "Juca");
    const speedCarEdna = randomCar(Math.random(), "Edna");
    for (let i = 0; i < numberLaps; i++) {

        const speedCarOne = speedCar(speedCarPedro.maxSpeed, speedCarPedro.minSpeed, speedCarPedro.minSkid, speedCarPedro.maxSkid);
        const speedCarTwo = speedCar(speedCarJuca.maxSpeed, speedCarJuca.minSpeed, speedCarPedro.minSkid, speedCarPedro.maxSkid);
        const speedCarThree = speedCar(speedCarEdna.maxSpeed, speedCarEdna.minSpeed, speedCarPedro.minSkid, speedCarPedro.maxSkid);

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
    document.getElementById("pedro").innerText = "Carro do Pedro:\nVel. Max: " + speedCarPedro.maxSpeed.toFixed(2) + "\nVel. Mín.: " + speedCarPedro.minSpeed.toFixed(2) + "\nDer. Máx.: " + speedCarPedro.maxSkid.toFixed(6) + "\nDer. Mín.: " + speedCarPedro.minSkid.toFixed(6) + "\nTipo: " + speedCarPedro.Type;
    document.getElementById("juca").innerText = "Carro do Juca:\nVel. Max: " + speedCarJuca.maxSpeed.toFixed(2) + "\nVel. Mín.: " + speedCarJuca.minSpeed.toFixed(2) + "\nDer. Máx.: " + speedCarJuca.maxSkid.toFixed(6) + "\nDer. Mín.: " + speedCarJuca.minSkid.toFixed(6) + "\nTipo: " + speedCarJuca.Type;
    document.getElementById("edna").innerText = "Carro do Edna:\nVel. Max: " + speedCarEdna.maxSpeed.toFixed(2) + "\nVel. Mín.: " + speedCarEdna.minSpeed.toFixed(2) + "\nDer. Máx.: " + speedCarEdna.maxSkid.toFixed(6) + "\nDer. Mín.: " + speedCarEdna.minSkid.toFixed(6) + "\nTipo: " + speedCarEdna.Type;
    document.querySelector(".cars").style.visibility = "visible";
}


function speedCar(max, min, minSkid, maxSkid) {
    let finalSpeed;
    let finalSkid;
    finalSpeed = Math.random() * (max - min) + min;
    finalSkid = Math.random() * (maxSkid - minSkid) + minSkid;
    return finalSpeed - (finalSpeed * finalSkid);
}
// min max derrapagem tipo e nome
function randomCar(carType, name){
    const myCar = new Object();
    if (carType < 0.6){
        myCar.minSpeed = Math.random() * (130 - 110) + 110;
        myCar.maxSpeed = Math.random() * (200 - 180) + 180;
        let skid1 = Math.random() * (0.04 - 0.03) + 0.03;
        let skid2 = Math.random() * (0.04 - 0.03) + 0.03;
        myCar.minSkid = Math.min(skid1, skid2);
        myCar.maxSkid = Math.max(skid1, skid2);
        myCar.Type = "Popular"
        myCar.Owner = name;
    }
    else if (carType < 0.95){
        myCar.minSpeed = Math.random() * (145 - 125) + 125;
        myCar.maxSpeed = Math.random() * (215 - 195) + 195;
        let skid1 = Math.random() * (0.03 - 0.02) + 0.02;
        let skid2 = Math.random() * (0.03 - 0.02) + 0.02;
        myCar.minSkid = Math.min(skid1, skid2);
        myCar.maxSkid = Math.max(skid1, skid2);
        myCar.Type = "Sport"
        myCar.Owner = name;

    }
    else {
        myCar.minSpeed = Math.random() * (160 - 140) + 140;
        myCar.maxSpeed = Math.random() * (230 - 210) + 210;
        let skid1 = Math.random() * (0.0175 - 0.01) + 0.01;
        let skid2 = Math.random() * (0.0175 - 0.01) + 0.01;
        myCar.minSkid = Math.min(skid1, skid2);
        myCar.maxSkid = Math.max(skid1, skid2);
        myCar.Type = "Super Sport"
        myCar.Owner = name;
    }

    return myCar;
}

