const app = require("express")();
const consign = require("consign");
const db = require('./config/db')

app.db = db

consign()
  .then("./config/middlewares.js")
  .then("./api")
  .then("./schedule")
  .then("./config/routes.js")
  .into(app);

app.listen(3000, () => {
  console.log("Backend INICIAL executando...");
});
