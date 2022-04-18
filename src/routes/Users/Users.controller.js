const User = require('../../models/Users/Users.mongo');

const httpgetAllUsers = async (req,res) => {
    const productList = await User.find({});
    return res.status(200).json(productList);
};

module.exports={
    httpgetAllUsers,
};

