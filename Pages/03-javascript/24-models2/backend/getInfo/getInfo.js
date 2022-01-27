const fs = require('fs');

function getInfo() {
    const x = fs.readFileSync('./database.json');
    return JSON.parse(x.toString());
}

module.exports = getInfo;