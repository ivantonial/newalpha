function factorial(_x) {
    if (_x === 1) {
        return _x;
    }
    return _x * factorial(_x - 1);
}

const result = factorial(4);
console.log(result);