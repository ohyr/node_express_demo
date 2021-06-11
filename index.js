const express = require("express");
const app = express();
const port = 3000;

const { USER_NAME, PASSWORD } = require("./privacy/mongo");

const mongoose = require("mongoose");
mongoose
  .connect(
    `mongodb+srv://${USER_NAME}:${PASSWORD}@boilerplate.zjthq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
