const express = require('express');
const router = require('./router/index');

const app = express();

app.use(express.json());

const PORT = 4000;

app.listen(process.env.PORT || PORT, () => {
  console.log(`SERVER STARTED ON PORT ${process.env.PORT || PORT}`);
});

app.use('/api', router);

app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.code).send(err);
});
