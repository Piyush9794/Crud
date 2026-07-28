// const mongoose = require("mongoose");

// const DbConnect = async () => {
//   try {
//     const connect = await mongoose.connect(process.env.MONGO_URI);
//     if (connect) {
//       console.log("Database Conneccted !");
//       console.log("3333333",process.env.MONGO_URI);
      
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = DbConnect;

const mongoose = require("mongoose");

const DbConnect = async () => {
  try {
    console.log("URI:", process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ Database Connected");
  } catch (error) {
    console.error("❌ Mongo Error:", error);
  }
};

module.exports = DbConnect;