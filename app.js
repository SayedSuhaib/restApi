const expres = require("express");
const app = expres();
const product_routes = require("./routes/products");
const connectDB = require("./db/connect");
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hi I am server");
})

app.use("/api/products", product_routes)

const start = async()=>{
    try {
        await connectDB(process.env.MONGODB_URI);
        app.listen(PORT, () => {
            console.log(`Server id connected to port ${PORT}`);
        })
    } catch(err) {
        console.log("Error occured : ", err);
    }
};

start();