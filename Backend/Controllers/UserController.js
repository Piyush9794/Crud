const UserModel = require("../Model/UserSchema");
// const { param } = require("../Routes/UserRoute");

//For registration

// const userRegister = async (req, res) => {
//   try {
//     // const { name, email, password } = req.body;
//     const { name, email, password } = req.body;
//     const isExist = await UserModel.findOne({ email });
//     if (isExist) {
//       res.json({
//         success: false,
//         code: 401,
//         message: "This email already exist ",
//         error: true,
//         data: isExist,
//       });
//     } else {
//       const data = new UserModel({ name, email, password });
//       const result = await data.save();
//       res.json({
//         success: true,
//         code: 201,
//         message: "Succesfully Register ",
//         error: false,
//         data: result,
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     res.json({
//       success: false,
//       code: 404,
//       message: " Interval server Error ",
//       error: true,
//       data: "",
//     });
//   }
// };



const userRegister = async (req, res) => {
  try {
    console.log("Register API Hit");
    console.log(req.body);

    const { name, email, password } = req.body;

    const isExist = await UserModel.findOne({ email });

    if (isExist) {
      return res.status(409).json({
        success: false,
        message: "Email already exists",
      });
    }

    const data = new UserModel({ name, email, password });
    const result = await data.save();

    return res.status(201).json({
      success: true,
      message: "Successfully Registered",
      data: result,
    });
  } catch (error) {
    console.error("Register Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};




//For fetch User
const userFetch = async (req, res) => {
  try {
    const result = await UserModel.find();
    res.json({
      success: true,
      code: 201,
      message: "User Fetch Succesfully ",
      error: false,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

//for delete user

const UserDelete = async (req, res) => {
  //   const { id } = paramas;
  const id = req.params.id;
  console.log("scs", id);

  const result = await UserModel.deleteOne({ _id: id });
  res.json({
    success: true,
    code: 202,
    message: "User Delete Succesfully ",
    error: false,
    data: result,
  });
};

// const LoginFunction = async (req,res)=>{
//   const {email,password} = req.body;
//   if(!email || !password){
//     res.json({
//       success:false,
//       code:402,
//       message:"Miisining Information",
//       error:true,
//     })
//   }else{
//     const result = await UserModel.findOne({email,password});
//      res.json({
//       success:true,
//       code:201,
//       message:"Login Successfully !",
//       error:false,
//       data:result
//     })
//   }
// }

const LoginFunction = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        success: false,
        code: 400,
        message: "Missing Information",
        error: true,
      });
    }

    const user = await UserModel.findOne({ email, password });

    if (!user) {
      return res.json({
        success: false,
        code: 401,
        message: "Invalid Email or Password",
        error: true,
      });
    }

    return res.json({
      success: true,
      code: 200,
      message: "Login Successfully!",
      error: false,
      data: user,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


const UserEdit = async (req, res) => {
  const id = req.params.id;
  console.log("User Id :", id);

  const { name,email, password } = req.body;
  const result = await UserModel.updateOne(
    { _id: id },
    { name, email, password },
  );
  res.json({
    success: true,
    code: 201,
    message: "Update Successfully !",
    error: true,
    data: result,
  });
};

module.exports = { userRegister, userFetch, UserDelete, UserEdit ,LoginFunction};
