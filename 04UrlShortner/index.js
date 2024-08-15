const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const URL = require("./models/url");
const app = express();
const port = 3000;

connectToMongoDB("mongodb://localhost:27017/urlShortner").then(() =>
  console.log("Connected to MongoDB")
);

app.use(express.json());

app.use("/url", urlRoute);

app.listen(port, () => console.log(`Server is running on port ${port}`));
