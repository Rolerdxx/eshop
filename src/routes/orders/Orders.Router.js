const express = require("express");
const {httpgetAllOrders } = require("./Orders.controller");

const orderRouter = express.Router();

orderRouter.get("/", httpgetAllOrders);

module.exports = orderRouter;