const matrix = [[10,15,5,2],[5,59,48,18],[81,168,19,18],[948,198,918,19]]

// function printMatrix(_matrix, _lin, _col){
//     const lin = _lin;
//     const col = _col;
//     printNumbers.push(matrix[lin][col]);

//     console.log(matrix[lin][col]);
//     if (col === 0 && lin ===0){
//         return printNumbers;
//         //return _matrix[lin][col];
//     }
//     //console.log(matrix[lin][col]);

//     if (col === 0){
//         return printMatrix(matrix,lin-1,matrix.length - 1);
//     }
//     else {
//         return printMatrix(matrix,lin,col-1);
//     }
// }

// printMatrix(matrix, matrix[0].length - 1, matrix.length - 1);
// console.log(printNumbers);


function printMatrix(_matrix){
    const matrix = _matrix;
    const matrixFlat = matrix.flat();

    
    if (matrixFlat.length === 1){
        console.log(matrixFlat.pop());
        return matrixFlat;
        //return _matrix[lin][col];
    }
    else {
        console.log(matrixFlat.pop());
        return printMatrix(matrixFlat);
    }
}

printMatrix(matrix);
console.log(matrix);
// console.log(printMatrix(matrix));



