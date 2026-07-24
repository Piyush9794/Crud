const express = require("express");
const cors = require('cors')
const userRouter = require("./Routes/UserRoute");
const DbConnect = require("./Config/Db");
const app = express();

app.use(express.json());
app.use(cors())
app.use("/api", userRouter);


DbConnect();

app.listen(9000, () => {
  console.log("Server is Running on the server 9000");
});
