//conexao com banco de dados
const { Sequelize } = require("sequelize");
const conn = new Sequelize("bancocrud", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

const run = async () => {
  try {
    conn.authenticate();
    console.log("banco rodando");
  } catch (err) {
    console.log("erro na iniciaçao do servidor");
    console.log(err);
  }
};

module.exports = conn;
