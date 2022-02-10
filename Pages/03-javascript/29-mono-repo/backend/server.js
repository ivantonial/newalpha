const app = require("./config/customExpress")();
const port = 3000;

app.listen(port, () => console.log(`Working on port: ${port}`));