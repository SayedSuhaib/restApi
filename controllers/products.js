const Product = require("../models/products");

const getAllProducts = async(req, res) => {
    try {
        const productData = await Product.find(req.query);
        res.status(200).json({productData});
    } catch(err) {
        console.log("Error found : ", err);
        res.status(500).json({error : "Internal server error"});
    }
};

const getTestingProducts = async(req, res) => {
    res.status(200).json({msg : "Get all testing products"});
}

module.exports = {getAllProducts, getTestingProducts};