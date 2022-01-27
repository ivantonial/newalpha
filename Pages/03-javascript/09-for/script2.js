const carOne = [150, 230, 0.03, "Pedro"];
const carTwo = [120, 260, 0.05, "Juca"];
const carThree = [180, 220, 0.01, "Edna"];

function raceResult() {
    // Receive numbers of laps
    let numberLaps = document.querySelector('input[name="race"]:checked').value;
    let winners = [0, 0 ,0];
    for (let i = 0; i < numberLaps; i++){
        let speedCarOne = speedCar(carOne[0], carOne[1], carOne[2], carOne[3]);
        let speedCarTwo = speedCar(carTwo[0], carTwo[1], carTwo[2], carTwo[3]);
        let speedCarThree = speedCar(carThree[0], carThree[1], carThree[2], carThree[3]);

        console.log(speedCarOne[0]);
        console.log(speedCarTwo[0]);
        console.log(speedCarThree[0]);

        if (speedCarOne[0] == speedCarTwo[0] && speedCarOne[0] == speedCarThree[0]) {
            winners[0]++;
            winners[1]++;
            winners[2]++;
        }
        else if (speedCarOne[0] == speedCarTwo[0] && speedCarOne[0] > speedCarThree[0]) {
            winners[0]++;
            winners[1]++;
        }
        else if (speedCarOne[0] > speedCarTwo[0] && speedCarOne[0] == speedCarThree[0]) {
            winners[0]++;
            winners[2]++;
        }
        else if (speedCarTwo[0] == speedCarThree[0] && speedCarTwo[0] > speedCarOne[0]) {
            winners[1]++;
            winners[2]++;
        }
        else if (speedCarOne[0] > speedCarTwo[0] && speedCarOne[0] > speedCarThree[0]) {
            winners[0]++;
        }
        else if (speedCarOne[0] < speedCarTwo[0] && speedCarTwo[0] > speedCarThree[0]) {
            winners[1]++;
        }
        else 
            winners[2]++;
    }
    
    console.log(winners);

}


function speedCar(max, min, skid, name){
    let maxSpeed;
    let finalSpeed = [];
    maxSpeed = Math.random() * (max - min) + min;
    finalSpeed.push(maxSpeed - (maxSpeed * skid));
    finalSpeed.push(name);
    return finalSpeed;
}





