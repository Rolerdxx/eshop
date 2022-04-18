const express = require("express");
const {httpgetAllUsers } = require("./Users.controller");

const userRouter = express.Router();

userRouter.get("/", httpgetAllUsers);

module.exports = userRouter;