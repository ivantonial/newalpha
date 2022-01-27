let multiplyBy5 = createMultiplier(5);

function createMultiplier(multiplyer){
    return function(number) {
        return multiplyer * number;
    };
}

console.log(multiplyBy5(10));

console.log(multiplyBy5(12));

console.log(multiplyBy5(7));