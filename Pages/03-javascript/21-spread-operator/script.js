// Questão 01-a

function multiply(x, y, z, v) {
    return x * y * z * v;
  }
  
  const numbers = [10, 20, 30, 40];
  
  console.log(multiply(...numbers));
 

  // Questão 01-b

const array01 = [10, 20, 30, 40];
const array02 = [100, 200, 300, 400];

function arrayConcat(array01, array02) {
  return [...array01, ...array02];
}

const vetConcat = arrayConcat(array01, array02);
console.log(vetConcat);

  // Questão 01-c

function maxReturn(){
  const drawNumbers = [];

  for (let i=0; i<10; i++){
    drawNumbers.push(Math.floor(Math.random() * 100) + 1);
  }
  console.log(drawNumbers)
  return Math.max(...drawNumbers);
}

console.log(maxReturn());