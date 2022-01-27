const getInfo = require("../getInfo/getInfo");

module.exports = app => {
    app.get('/employees', function (req, res){
        res.json(getInfo());
    });
}

module.exports = app => {
    app.get('/sector', function (req, res){
        const sectorRequired = req.query.sector;
        console.log(sectorRequired);
        const info = getInfo();

        const employeesSector = Object.values(info).filter(element => {
            return element["sector"].toLowerCase().includes(sectorRequired.toLowerCase());
        })

        res.json(employeesSector);
    });
}

