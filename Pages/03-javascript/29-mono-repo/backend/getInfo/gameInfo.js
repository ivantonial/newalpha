const fs = require('fs');

function gameInfo() {
    const x = fs.readFileSync('./databaseGame.json');
    return JSON.parse(x.toString());
}

module.exports = gameInfo;