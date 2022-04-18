const Category = require('../../models/Category/Category.mongo');

const httpgetAllCategory = async (req,res) => {
    const CategoryList = await Category.find({});
    return res.status(200).json(CategoryList);
};

module.exports={
    httpgetAllCategory,
};

