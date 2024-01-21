const moongoose = require("mongoose");

const connectDB = (uri) => {
    console.log("Database connected");
    return moongoose.connect(uri);
}

module.exports = connectDB;