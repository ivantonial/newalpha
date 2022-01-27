const allCars = {
    "popular": {
        "vel_max": { "min": 180, "max": 200 },
        "vel_min": { "min": 110, "max": 130 },
        "derrapagem": { "min": 0.03, "max": 0.04 }
    },
    "sport": {
        "vel_max": { "min": 195, "max": 215 },
        "vel_min": { "min": 125, "max": 145 },
        "derrapagem": { "min": 0.02, "max": 0.03 }
    },
    "supersport": {
        "vel_max": { "min": 210, "max": 230 },
        "vel_min": { "min": 140, "max": "160" },
        "derrapagem": { "min": 0.01, "max": 0.0175 }
    },
}

const raceXpPoints = {
    "rapida": { "first": 200, "second": 120, "third": 50 },
    "grandPrix": { "first": 220, "second": 130, "third": 75 },
    "enduro": { "first": 250, "second": 150, "third": 90 }
}

const playersStats = [
    {
        "name": "Pedro",
        "lvl": 0,
        "xp": 0
    },
    {
        "name": "Juca",
        "lvl": 0,
        "xp": 0
    },
    {
        "name": "Edna",
        "lvl": 0,
        "xp": 0
    }
]

function raceResult() {
    // Receive numbers of laps
    let numberLaps = document.querySelector('input[name="race"]:checked').value;
    const winners = [[0, "Pedro"], [0, "Juca"], [0, "Edna"]];
    let totalLaps = 0;
    const speedCarPedro = randomCar(Math.random(), "Pedro");
    const speedCarJuca = randomCar(Math.random(), "Juca");
    const speedCarEdna = randomCar(Math.random(), "Edna");

    document.getElementById("playersInitialStatus").innerText = "Carro antes de melhorar de acordo com os levels dos players";
    document.getElementById("bigPedro").innerText = "Carro do pedro:\nVel. Max." + speedCarPedro.maxSpeed.toFixed(2) + " km/h\nVel. Mín.: " + speedCarPedro.minSpeed.toFixed(2) + " km/h\nDer. Máx.: " + speedCarPedro.maxSkid.toFixed(6) + "\nDer. Mín.: " + speedCarPedro.minSkid.toFixed(6) + "\nTipo: " + speedCarPedro.Type + "\nLVL: " + playersStats[0].lvl + "\nXP: " + playersStats[0].xp;
    document.getElementById("bigJuca").innerText = "Carro do Juca:\nVel. Max." + speedCarJuca.maxSpeed.toFixed(2) + " km/h\nVel. Mín.: " + speedCarJuca.minSpeed.toFixed(2) + " km/h\nDer. Máx.: " + speedCarJuca.maxSkid.toFixed(6) + "\nDer. Mín.: " + speedCarJuca.minSkid.toFixed(6) + "\nTipo: " + speedCarJuca.Type + "\nLVL: " + playersStats[1].lvl + "\nXP: " + playersStats[1].xp;
    document.getElementById("bigEdna").innerText = "Carro do Edna:\nVel. Max." + speedCarEdna.maxSpeed.toFixed(2) + " km/h\nVel. Mín.: " + speedCarEdna.minSpeed.toFixed(2) + " km/h\nDer. Máx.: " + speedCarEdna.maxSkid.toFixed(6) + "\nDer. Mín.: " + speedCarEdna.minSkid.toFixed(6) + "\nTipo: " + speedCarEdna.Type + "\nLVL: " + playersStats[2].lvl + "\nXP: " + playersStats[2].xp;

    playersStats.forEach((element) => {
        if (element.name == "Pedro") {
            speedCarPedro.maxSpeed = speedCarPedro.maxSpeed + speedCarPedro.maxSpeed * Number(element.lvl) * 0.01;
            speedCarPedro.minSpeed = speedCarPedro.minSpeed + speedCarPedro.minSpeed * Number(element.lvl) * 0.01;
        }
        if (element.name == "Juca") {
            speedCarJuca.maxSpeed = speedCarJuca.maxSpeed + speedCarJuca.maxSpeed * Number(element.lvl) * 0.01;
            speedCarJuca.minSpeed = speedCarJuca.minSpeed + speedCarJuca.minSpeed * Number(element.lvl) * 0.01;
        }
        if (element.name == "Edna") {
            speedCarEdna.maxSpeed = speedCarEdna.maxSpeed + speedCarEdna.maxSpeed * Number(element.lvl) * 0.01;
            speedCarEdna.minSpeed = speedCarEdna.minSpeed + speedCarEdna.minSpeed * Number(element.lvl) * 0.01;
        }
    });

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

    const first = [];
    const second = [];
    const third = [];


    if (winners[0][0] > winners[1][0] && winners[0][0] > winners[2][0]) {
        first.push(winners[0][0]);
        first.push(winners[0][1]);
        if (winners[1][0] > winners[2][0]) {
            second.push(winners[1][0]);
            second.push(winners[1][1]);
            third.push(winners[2][0]);
            third.push(winners[2][1]);
        }
        else {
            second.push(winners[2][0]);
            second.push(winners[2][1]);
            third.push(winners[1][0]);
            third.push(winners[1][1]);
        }
    }
    else if (winners[0][0] < winners[1][0] && winners[1][0] > winners[2][0]) {
        first.push(winners[1][0]);
        first.push(winners[1][1]);
        if (winners[0][0] > winners[2][0]) {
            second.push(winners[0][0]);
            second.push(winners[0][1]);
            third.push(winners[2][0]);
            third.push(winners[2][1]);
        }
        else {
            second.push(winners[2][0]);
            second.push(winners[2][1]);
            third.push(winners[0][0]);
            third.push(winners[0][1]);
        }
    }
    else {
        first.push(winners[2][0]);
        first.push(winners[2][1]);
        if (winners[0][0] > winners[1][0]) {
            second.push(winners[0][0]);
            second.push(winners[0][1]);
            third.push(winners[1][0]);
            third.push(winners[1][1]);
        }
        else {
            second.push(winners[1][0]);
            second.push(winners[1][1]);
            third.push(winners[0][0]);
            third.push(winners[0][1]);
        }
    }

    lvlXp(numberLaps, first, second, third);

    document.getElementById("divResult").style.visibility = "visible";
    document.getElementById("resultLaps").innerHTML = "A corrida teve: " + totalLaps + " voltas.";
    document.getElementById("resultWinner").innerHTML = "O vencedor foi " + first[1] + " , sendo mais rápido em " + first[0] + " voltas.";
    document.getElementById("resultSecond").innerHTML = "O segundo lugar foi " + second[1] + " , sendo mais rápido em " + second[0] + " voltas.";
    document.getElementById("resultThird").innerHTML = "O terceiro lugar foi " + third[1] + " , sendo mais rápido em " + third[0] + " voltas.";
    document.getElementById("playersFinalStatus").innerText = "Carro depois de melhorar de acordo com os levels dos players";
    document.getElementById("pedro").innerText = "Carro do Pedro:\nVel. Max: " + speedCarPedro.maxSpeed.toFixed(2) + " km/h\nVel. Mín.: " + speedCarPedro.minSpeed.toFixed(2) + " km/h\nDer. Máx.: " + speedCarPedro.maxSkid.toFixed(6) + "\nDer. Mín.: " + speedCarPedro.minSkid.toFixed(6) + "\nTipo: " + speedCarPedro.Type + "\nLVL: " + playersStats[0].lvl + "\nXP: " + playersStats[0].xp;
    document.getElementById("juca").innerText = "Carro do Juca:\nVel. Max: " + speedCarJuca.maxSpeed.toFixed(2) + " km/h\nVel. Mín.: " + speedCarJuca.minSpeed.toFixed(2) + " km/h\nDer. Máx.: " + speedCarJuca.maxSkid.toFixed(6) + "\nDer. Mín.: " + speedCarJuca.minSkid.toFixed(6) + "\nTipo: " + speedCarJuca.Type + "\nLVL: " + playersStats[1].lvl + "\nXP: " + playersStats[1].xp;
    document.getElementById("edna").innerText = "Carro do Edna:\nVel. Max: " + speedCarEdna.maxSpeed.toFixed(2) + " km/h\nVel. Mín.: " + speedCarEdna.minSpeed.toFixed(2) + " km/h\nDer. Máx.: " + speedCarEdna.maxSkid.toFixed(6) + "\nDer. Mín.: " + speedCarEdna.minSkid.toFixed(6) + "\nTipo: " + speedCarEdna.Type + "\nLVL: " + playersStats[2].lvl + "\nXP: " + playersStats[2].xp;
    document.querySelector(".cars").style.visibility = "visible";
    document.querySelector(".initialCars").style.visibility = "visible";
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

// incrementa lvl e xp

function lvlXp(numberLaps, winner, second, third) {
    if (numberLaps == 10) {
        playersStats.forEach((element) => {
            console.log(element.name);
            console.log(element.xp);
            console.log(element.lvl);
            if (winner[1] == element.name && element.lvl != 10) {
                element.xp += raceXpPoints.rapida.first;
                if (element.xp >= 450) {
                    element.lvl++;
                    element.xp -= 450;
                }
                if (element.lvl == 10) {
                    element.xp = 0;
                }
            }
            if (second[1] == element.name && element.lvl != 10) {
                element.xp += raceXpPoints.rapida.second;
                if (element.xp >= 450) {
                    element.lvl++;
                    element.xp -= 450;
                }
                if (element.lvl == 10) {
                    element.xp = 0;
                }
            }
            if (third[1] == element.name && element.lvl != 10) {
                element.xp += raceXpPoints.rapida.third;
                if (element.xp >= 450) {
                    element.lvl++;
                    element.xp -= 450;
                }
                if (element.lvl == 10) {
                    element.xp = 0;
                }
            }
        });
    }
    else if (numberLaps == 70) {
        playersStats.forEach((element) => {
            if (winner[1] == element.name && element.lvl != 10) {
                element.xp += raceXpPoints.grandPrix.first;
                if (element.xp >= 450) {
                    element.lvl++;
                    element.xp -= 450;
                }
                if (element.lvl == 10) {
                    element.xp = 0;
                }
            }
            if (second[1] == element.name && element.lvl != 10) {
                element.xp += raceXpPoints.grandPrix.second;
                if (element.xp >= 450) {
                    element.lvl++;
                    element.xp -= 450;
                }
                if (element.lvl == 10) {
                    element.xp = 0;
                }
            }
            if (third[1] == element.name && element.lvl != 10) {
                element.xp += raceXpPoints.grandPrix.third;
                if (element.xp >= 450) {
                    element.lvl++;
                    element.xp -= 450;
                }
                if (element.lvl == 10) {
                    element.xp = 0;
                }
            }
        });
    }
    else {
        playersStats.forEach((element) => {
            if (winner[1] == element.name && element.lvl != 10) {
                element.xp += raceXpPoints.enduro.first;
                if (element.xp >= 450) {
                    element.lvl++;
                    element.xp -= 450;
                }
                if (element.lvl == 10) {
                    element.xp = 0;
                }
            }
            if (second[1] == element.name && element.lvl != 10) {
                element.xp += raceXpPoints.enduro.second;
                if (element.xp >= 450) {
                    element.lvl++;
                    element.xp -= 450;
                }
                if (element.lvl == 10) {
                    element.xp = 0;
                }
            }
            if (third[1] == element.name && element.lvl != 10) {
                element.xp += raceXpPoints.enduro.third;
                if (element.xp >= 450) {
                    element.lvl++;
                    element.xp -= 450;
                }
                if (element.lvl == 10) {
                    element.xp = 0;
                }
            }
        });
    }
}
