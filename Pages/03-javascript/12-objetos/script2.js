const allCars = {
    "popular": {
        "vel_max": { "min": 180, "max": 200},
        "vel_min": { "min": 110, "max": 130},
        "derrapagem": { "min": 0.03, "max": 0.04}
    },
    "sport": {
        "vel_max": { "min": 195, "max": 215},
        "vel_min": { "min": 125, "max": 145},
        "derrapagem": { "min": 0.02, "max": 0.03}
    },
    "supersport": {
        "vel_max": { "min": 210, "max": 230},
        "vel_min": { "min": 140, "max": "160"},
        "derrapagem": { "min": 0.01, "max": 0.0175}
    },
}

function raceResult() {
    // Receive numbers of laps
    let numberLaps = document.querySelector('input[name="race"]:checked').value;
    let winners = [[0, "Pedro"], [0, "Juca"], [0, "Edna"]];
    let totalLaps = 0;
    let speedCarPedro = randomCar(Math.random(), "Pedro");
    let speedCarJuca = randomCar(Math.random(), "Juca");
    let speedCarEdna = randomCar(Math.random(), "Edna");
    for (let i = 0; i < numberLaps; i++) {

        let speedCarOne = speedCar(speedCarPedro.maxSpeed, speedCarPedro.minSpeed, speedCarPedro.minSkid, speedCarPedro.maxSkid);
        let speedCarTwo = speedCar(speedCarJuca.maxSpeed, speedCarJuca.minSpeed, speedCarPedro.minSkid, speedCarPedro.maxSkid);
        let speedCarThree = speedCar(speedCarEdna.maxSpeed, speedCarEdna.minSpeed, speedCarPedro.minSkid, speedCarPedro.maxSkid);

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
function randomCar(carType, name) {
    const myCar = new Object();
    if (carType < 0.6) {
        myCar.minSpeed = Math.random() * (allCars.popular.vel_min.max - allCars.popular.vel_min.min) + allCars.popular.vel_min.min;
        myCar.maxSpeed = Math.random() * (allCars.popular.vel_max.max - allCars.popular.vel_max.min) + allCars.popular.vel_max.min;
        let skid1 = Math.random() * (allCars.popular.derrapagem.max - allCars.popular.derrapagem.min) + allCars.popular.derrapagem.min;
        let skid2 = Math.random() * (allCars.popular.derrapagem.max - allCars.popular.derrapagem.min) + allCars.popular.derrapagem.min;
        myCar.minSkid = Math.min(skid1, skid2);
        myCar.maxSkid = Math.max(skid1, skid2);
        myCar.Type = "Popular"
        myCar.Owner = name;
    }
    else if (carType < 0.95) {
        myCar.minSpeed = Math.random() * (allCars.sport.vel_min.max - allCars.sport.vel_min.min) + allCars.sport.vel_min.min;
        myCar.maxSpeed = Math.random() * (allCars.sport.vel_max.max - allCars.sport.vel_max.min) + allCars.sport.vel_max.min;
        let skid1 = Math.random() * (allCars.sport.derrapagem.max - allCars.sport.derrapagem.min) + allCars.sport.derrapagem.min;
        let skid2 = Math.random() * (allCars.sport.derrapagem.max - allCars.sport.derrapagem.min) + allCars.sport.derrapagem.min;
        myCar.minSkid = Math.min(skid1, skid2);
        myCar.maxSkid = Math.max(skid1, skid2);
        myCar.Type = "Sport"
        myCar.Owner = name;

    }
    else {
        myCar.minSpeed = (allCars.supersport.vel_min.max - allCars.supersport.vel_min.min) + allCars.supersport.vel_min.min;
        myCar.maxSpeed = Math.random() * (allCars.supersport.vel_max.max - allCars.supersport.vel_max.min) + allCars.supersport.vel_max.min;
        let skid1 = Math.random() * (allCars.supersport.derrapagem.max - allCars.supersport.derrapagem.min) + allCars.supersport.derrapagem.min;
        let skid2 = Math.random() * (allCars.supersport.derrapagem.max - allCars.supersport.derrapagem.min) + allCars.supersport.derrapagem.min;
        myCar.minSkid = Math.min(skid1, skid2);
        myCar.maxSkid = Math.max(skid1, skid2);
        myCar.Type = "Super Sport"
        myCar.Owner = name;
    }

    return myCar;
}