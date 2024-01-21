const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true }
});

const productSchema = new mongoose.Schema({
    product_id: { type: Number, required: true },
    product_title: { type: String, required: true },
    dataLinks: {
        type: Map,
        of: linkSchema
    }
});


module.exports = mongoose.model("Product", productSchema);