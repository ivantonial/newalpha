const gameInfo = require("../getInfo/gameInfo");
const fs = require('fs');


module.exports = app => {
    app.get('/games', function (req, res){
        res.json(gameInfo());
    });
}

module.exports = app => {
    app.post('/databaseGame', function (req, res){
        const required = req.body[0];
        console.log('antes');
        const info = gameInfo();
        console.log('depois');

        const newGame = {'id': info.length + 1, "game": required.game, "year": required.year, "genre": required.genre, "multiplayer": required.multiplayer, "offline": required.offline, "crossplataform": required.crossplataform};
        console.log(newGame);
        
        fs.readFile("./databaseGame.json", registerGame);

        function registerGame(error, out){
            if(error){
                fs.writeFile("./databaseGame.json", JSON.stringify([newGame]), (error, out) => {
                    if(error) console.log(error);
                });
                return false;
            }
            const data = JSON.parse(out.toString());
            data.push(newGame);
            console.log("data:" + data)
            
            fs.writeFile("./databaseGame.json", JSON.stringify(data), (error, out) =>{
                if(error) console.log(error);
            });
            return false;
        }

        res.send();
    });

    app.get('/databaseGame', (req, res) => {
        res.json(gameInfo());
    })
}
