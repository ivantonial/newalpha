const express = require("express");
const birthdayRoute = require("../routes/birthday");
const sector = require("../routes/sector");
const extension = require("../routes/extension");
const register = require("../routes/post");
const registerGame = require("../routes/registerGame");
const cors = require("cors");

module.exports = () => {
    const app = express();
    app.use(cors());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    
    register(app);
    birthdayRoute(app);
    sector(app);
    extension(app);
    registerGame(app);

    return app;
}