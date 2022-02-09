const getInfo = require("../getInfo/getInfo");

module.exports = app => {
    app.get('/employees', function (req, res){
        res.json(getInfo());
    });
}

module.exports = app => {
    app.get('/extension', function (req, res){
        // const branchCode = req.query.branch;
        // console.log(branchCode);
        // console.log(typeof(branchCode));
        const info = getInfo();
        // const branchReturn = Object.values(info).filter(element => {
        //     return element["branch"] === parseInt(branchCode);
        // })

        const extensionReturn = [];

        const sortExtension = (element1, element2) => {
            let value = 0;
            if (element1["name"] > element2["name"]){
                value = 1;
            }
            else if (element1["name"] < element2["name"]){
                value = -1;
            }
            return value;
        } 

        info.forEach(element => {
            extensionReturn.push({"name": element["name"], "extension": element["extension"]})
        });

        extensionReturn.sort(sortExtension)

        res.json(extensionReturn);
    });
}

