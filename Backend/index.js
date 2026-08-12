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

// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "https://piyush9794.github.io",
//     ],
//     credentials: true,
//   })
// );
const allowedOrigins = [
  "http://localhost:5173",              // Local Development
  "https://piyush9794.github.io",       // GitHub Pages
];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // Postman ya server-to-server requests ke liye
//       if (!origin) return callback(null, true);

//       if (allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 204,
  })
);



app.use("/api", userRouter);

// DbConnect();
DbConnect()

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
   console.log(`Server running on ${PORT}`);
});
