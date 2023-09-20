const conn = require("../controller/db/conn");
const { DataTypes } = require("sequelize");
const Products = conn.define("products", {
  name: {
    type: DataTypes.STRING,
    required: true,
  },
  price: {
    type: DataTypes.NUMBER,
    required: true,
  },
  description: {
    type: DataTypes.STRING,
    required: true,
  },
  profile: {
    type: DataTypes.STRING,
  },
});

module.exports = Products;
