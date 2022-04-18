const Order = require('../../models/orders/Orders.mongo');

const httpgetAllOrders = async (req,res) => {
    const orderList = await Order.find({});
    return res.status(200).json(orderList);
};

module.exports={
    httpgetAllOrders,
};

