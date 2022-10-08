const express = require("express");
const UserController = require("./controllers/User.controller");

const app = express();

app.use(express.json());

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT ${PORT}`);
});

app.post("/user", UserController.createUser);
app.post("/category", UserController.createCategory);
app.post("/record", UserController.addRecord);

app.use(function (err, req, res, next) {
  res.status(err.code).send(err);
});
