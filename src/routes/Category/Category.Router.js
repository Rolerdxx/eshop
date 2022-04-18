const express = require("express");
const {httpgetAllCategory } = require("./Category.controller");

const CategoryRouter = express.Router();

CategoryRouter.get("/", httpgetAllCategory);

module.exports = CategoryRouter;