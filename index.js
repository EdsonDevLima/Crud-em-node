const express = require("express");
const exh = require("express-handlebars");
const routes = require("./routes/RoutesProducts");
const conn = require("./controller/db/conn");
const app = express();

//config handlebars
app.engine("handlebars", exh.engine());
app.set("view engine", "handlebars");
//config leitura de inputs
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//config pasta de arquivos publicos
app.use(express.static("public"));
//config de rotas
app.use("/", routes);
conn
  .sync()
  .then(app.listen(3000), () => {
    console.log("server rodando");
  })
  .catch((err) => {
    console.log(err);
  });
