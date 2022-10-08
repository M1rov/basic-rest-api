const express = require("express");
const UserController = require("./controllers/User.controller");
const CategoryController = require("./controllers/Category.controller");
const RecordController = require("./controllers/Record.controller");

const app = express();

app.use(express.json());

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT ${PORT}`);
});

app.post("/user", UserController.createUser);
app.post("/category", CategoryController.createCategory);
app.get("/categories", CategoryController.getCategories);
app.post("/record", RecordController.addRecord);
app.get("/user_records/:user_id", RecordController.getUserRecords);
app.get(
  "/user_records/:user_id/:category_id",
  RecordController.getUserCategoryRecords
);

app.use(function (err, req, res) {
  res.status(err.code).send(err);
});
