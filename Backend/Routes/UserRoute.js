const express = require("express");
const userRouter = express.Router();

const {
  userRegister,
  userFetch,
  UserDelete,
  UserEdit,LoginFunction
} = require("../Controllers/UserController");

userRouter.post("/reg", userRegister);
userRouter.get("/get", userFetch);
userRouter.delete("/del/:id", UserDelete);
userRouter.put("/edit/:id", UserEdit);
userRouter.post("/login", LoginFunction);

module.exports = userRouter;
