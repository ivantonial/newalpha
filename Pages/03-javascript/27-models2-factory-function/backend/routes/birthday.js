const getInfo = require("../getInfo/getInfo");

module.exports = app => {
    app.get('/employees', function (req, res){
        res.json(getInfo());
    });
}

module.exports = app => {
    app.get('/birthday', function (req, res){
        const month = req.query.birthday;
        const info = getInfo();

        const birthdayEmployees = Object.values(info).filter(element => {
            return element["birthday"].split("-")[1] === month;
        })

        res.json(birthdayEmployees);
    });
}

