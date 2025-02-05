const products = require("../models/productModel");

// Get all products
const getAllProducts = (req, res) => {
    res.json(products);
};

// Get a product by ID
const getProductById = (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find((p) => p.id === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
};

