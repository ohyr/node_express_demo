const express = require("express");
const app = express();
const port = 3000;
const { User } = require("./models/User");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const { YOUR_CONNECTION_STRING } = require("./privacy/mongo");

const mongoose = require("mongoose");
mongoose
  .connect(YOUR_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
