const connectDB = require("./db/connect");
const Product = require("./models/products");
const productJson = require("./products.json");
require("dotenv").config(   );

const start = async() => {
    try {
        await connectDB(process.env.MONGODB_URI);
        Product.create(productJson);
        console.log("Data Inserted in DB");
    } catch(err) {
        console.log("Error found : ", err);
    }
}

start();