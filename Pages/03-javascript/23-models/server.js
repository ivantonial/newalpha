const app = require("./config/customExpress")();
const port = 8080;

app.listen(port, () => console.log(`Working on port: ${port}`));