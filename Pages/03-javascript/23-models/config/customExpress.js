const express = require("express");
const birthdayRoute = require("../routes/birthday");
const sector = require("../routes/sector");
const extension = require("../routes/extension");

module.exports = () => {
    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    birthdayRoute(app);
    sector(app);
    extension(app);


    return app;
}