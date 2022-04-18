const mongoose = require("mongoose");

const OrderitemsSchema = new mongoose.Schema({
  name: String,
  image: String,
  countInStock: {
    type:Number,
    required:true,
  },
});

const OrderitemsModel = mongoose.model('Orderitem',OrderitemsSchema);

module.exports=OrderitemsModel;
