const express = require("express");
const app = express();
const {connect} = require("./app/config/database");
connect();

app.listen(5000, () => {
  console.log("Node server listening on port 5000");
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const cors = require("cors");

app.use(cors({
  origin: '*',
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const logger = require("morgan");

app.use(logger("dev"));

//RUTAS
const users = require('./app/api/routes/user.routes');
app.use('/users', users)

app.set("secretKey", "nodeRestApi");

//ERRORES
const HTTPSTATUSCODE = require("./app/utils/httpStatusCode");
const { Server } = require("http");

app.use((req, res, next) => {
  let err = new Error();
  err.status = 404;
  err.message = HTTPSTATUSCODE[404];
  next(err);
});

app.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err.message || 'Unexpected error');
})

app.disable('x-powered-by');