const express = require("express");
const cors = require('cors')
const dotenv =require('dotenv')
dotenv.config()
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const userRouter = require("./Routes/UserRoute");
const DbConnect = require("./Config/Db");
const app = express();
app.use(express.json());
// app.use(cors())

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://piyush9794.github.io",
    ],
    credentials: true,
  })
);
app.use("/api", userRouter);

// DbConnect();
DbConnect()

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
   console.log(`Server running on ${PORT}`);
});
