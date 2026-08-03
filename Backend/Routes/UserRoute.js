const express = require("express");
const userRouter = express.Router();

const {
  userRegister,
  userFetch,
  UserDelete,
  UserEdit,
  LoginFunction,
} = require("../Controllers/UserController");

userRouter.post("/reg", userRegister);
userRouter.get("/get", userFetch);
userRouter.delete("/del/:id", UserDelete);
userRouter.put("/edit/:id", UserEdit);
userRouter.post("/login", LoginFunction);

userRouter.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Backend Working Fine 🚀",
    code :200
  });
});

module.exports = userRouter;
