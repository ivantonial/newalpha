const express = require('express');
const port = 8080;
const app = express();

app.use('/games', express.static('./src/gamesmagazine'));
app.use('/calculadora', express.static('./src/calculadora'));
app.use('/funcionarios', express.static('./src/funcionarios'));


app.listen(port, () => console.log(`Working on port: ${port}`));