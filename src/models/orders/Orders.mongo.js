const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: String,
  image: String,
  countInStock: {
    type:Number,
    required:true,
  },
});

const orderModel = mongoose.model('Order',orderSchema);

module.exports=orderModel;
