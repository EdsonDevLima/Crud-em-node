const Products = require("../models/products");
module.exports = class ControllerRoutes {
  static register(req, res) {
    res.render("register");
  }
  static async registerPost(req, res) {
    const { name, price, description } = req.body;
    const image = req.file.originalname;
    const product = { name, price, description, profile: image };
    console.log(product);
    try {
      Products.create(product);
    } catch (err) {
      console.log(err);
    }
    res.redirect("/");
  }
};
