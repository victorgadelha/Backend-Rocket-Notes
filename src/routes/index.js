const { Router } = require("express");

const usersRoute = require("./users.routes");

const routes = Router();

routes.use("/users, usersRouter");

module.exports = routes;
