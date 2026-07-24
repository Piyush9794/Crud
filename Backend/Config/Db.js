const mongoose = require("mongoose");

const DbConnect = async () => {
  try {
    const connect = await mongoose.connect("mongodb://localhost:27017/Dummmy");
    if (connect) {
      console.log("Database Conneccted !");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = DbConnect;