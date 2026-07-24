const express = require("express");
const userRouter = express.Router();

const {
  userRegister,
  userFetch,
  UserDelete,
  UserEdit
} = require("../Controllers/UserController");

userRouter.post("/reg", userRegister);
userRouter.get("/get", userFetch);
userRouter.delete("/del/:id", UserDelete);
userRouter.put("/edit/:id", UserEdit);

module.exports = userRouter;
