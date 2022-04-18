const Product = require('../../models/Products/Products.mongo');

const httpgetAllProducts = async (req,res) => {
    const productList = await Product.find({});
    return res.status(200).json(productList);
};

const httpaddProduct = (req,res) => {
    const newProduct = new Product({
        name:req.body.name,
        image:req.body.image,
        countInStock:req.body.countInStock,
    });
    newProduct.save().then((CreatedProduct=>{
        return res.status(201).json(CreatedProduct);
    })).catch((err)=>{
        return res.status(500).json({
            error:err,
            success:false,
        });
    });
};

module.exports = {
    httpaddProduct,
    httpgetAllProducts,
};