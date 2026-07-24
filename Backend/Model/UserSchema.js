const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    // require: true,
    // unique:true
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  
},
{
     timestamps: true,
});

const UserModel = mongoose.model("UserData", UserSchema);

module.exports = UserModel;
