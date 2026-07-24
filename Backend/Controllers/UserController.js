const UserModel = require("../Model/UserSchema");
// const { param } = require("../Routes/UserRoute");

//For registration

const userRegister = async (req, res) => {
  try {
    // const { name, email, password } = req.body;
    const { name, email, password } = req.body;
    const isExist = await UserModel.findOne({ email });
    if (isExist) {
      res.json({
        success: false,
        code: 401,
        message: "This email already exist ",
        error: true,
        data: isExist,
      });
    } else {
      const data = new UserModel({ name, email, password });
      const result = await data.save();
      res.json({
        success: true,
        code: 201,
        message: "Succesfully Register ",
        error: false,
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      code: 404,
      message: " Interval server Error ",
      error: true,
      data: "",
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

module.exports = { userRegister, userFetch, UserDelete, UserEdit };
