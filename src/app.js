const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const productRouter = require("./routes/Products/Product.Router");
const CategoryRouter = require("./routes/Category/Category.Router");
const OrderitemsRouter = require("./routes/Orderitems/Orderitems.Router");
const OrdersRouter = require("./routes/orders/Orders.Router");
const UsersRouter = require("./routes/Users/Users.Router");

const app = express();

require("dotenv/config");
const api = process.env.API_URL;

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(morgan("tiny"));

app.use(`${api}/products`, productRouter);
app.use(`${api}/Category`, CategoryRouter);
app.use(`${api}/Orderitems`, OrderitemsRouter);
app.use(`${api}/Orders`, OrdersRouter);
app.use(`${api}/Users`, UsersRouter);

module.exports = app;
