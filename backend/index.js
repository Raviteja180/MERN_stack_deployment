// import cors from "cors";
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

console.log("raviteja started working")
app.listen(3001, () => {
  console.log("server is listening on 3001");
});
app.use(
  cors({
    origin: "https://mern-stack-deployment-frontend3.vercel.app",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());
mongoose.connect(
  "mongodb+srv://Raviteja180:Raviteja180@cluster1.dusxcml.mongodb.net/forms?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

const schema = {
  name: String,
};

const data = mongoose.model("userdetails", schema);
app.get("/", function (req, res) {
  res.send("express is working and everything is fine for now");
});
app.post("/api", (req, res) => {
  console.log(req.body);
  // res.send(req.body);
  // console.log(req.body);
  const { username } = req.body;
  // res.send(username);
  // const dataDoc = new data({ name: username });
  // dataDoc
  //   .save()
  //   .then((result) => res.send(result))
  //   .catch((err) => {
  //     console.log(err);
  //   });
  data
    .create({ name: username })
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});
