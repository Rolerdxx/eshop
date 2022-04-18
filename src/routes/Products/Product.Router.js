const express = require("express");
const { httpaddProduct, httpgetAllProducts } = require("./Product.controller");

const productRouter = express.Router();

productRouter.get("/", httpgetAllProducts);

productRouter.post("/", httpaddProduct);

module.exports = productRouter;
