const getInfo = require("../getInfo/getInfo");
const fs = require('fs');


module.exports = app => {
    app.get('/employees', function (req, res){
        res.json(getInfo());
    });
}

module.exports = app => {
    app.post('/register', function (req, res){
        const required = req.body[0];
        const info = getInfo();

        const newEmployee = {'id': info.length + 1, "name": required.name, "extension": required.extension, "email": required.email, "sector": required.sector, "birthday": required.birthday};
        console.log(newEmployee);
        
        fs.readFile("./register.json", registerEmployee);

        function registerEmployee(error, out){
            if(error){
                fs.writeFile("./register.json", JSON.stringify([newEmployee]), (error, out) => {
                    if(error) console.log(error);
                });
                return false;
            }
            const data = JSON.parse(out.toString());
            data.push(newEmployee);
            console.log("data:" + data)
            
            fs.writeFile("./register.json", JSON.stringify(data), (error, out) =>{
                if(error) console.log(error);
            });
            return false;
        }

        res.send();
    });
}