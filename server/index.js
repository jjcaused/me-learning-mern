const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userModel = require("./models/users");
const cors = require("cors");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://username:password@cluster0.2admvi4.mongodb.net/merntutorial?retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/getUsers", (req, res) => {
  userModel
    .find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(res.json(err));
    });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new userModel(user);
  await newUser.save();
  res.json(user);
});

app.listen(3001, () => {
  console.log("server is running  pakka tane?");
});

// (err, result) => {
//   if (err) {
//     res.json(err);
//   } else {
//     res.json(result);
//   }
// })
