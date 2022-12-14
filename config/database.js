const mongoose = require("mongoose");

require("dotenv").config({ path: "./config/.env" });    //Use .env file in config folder to keep all sensitive information secure 

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_STRING, {useNewUrlParser: true});

    console.log(`MongoDB Connected!`); // ${conn.connection.host}
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
