const express = require("express");
const fs = require("fs");
const User = require("./models/user");
const userRouter = require("./routes/user");

const { connectMongoDb } = require("./connection");

const { logReqRes } = require("./middlewares");

const app = express();

const PORT = 3000;


//Connection
connectMongoDb("mongodb://localhost:27017/demoapp1").then(() => console.log("Connected to MongoDB")); 

//MiddleWare - Plugin for express to parse json
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

//Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
