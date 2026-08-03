const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    // require: true,
    // unique:true
  },
  email: {
  type: String,
  required: true,
},
password: {
  type: String,
  required: true,
},
  
},
{
     timestamps: true,
});

const UserModel = mongoose.model("UserData", UserSchema);

module.exports = UserModel;
