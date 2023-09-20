const routes = require("express").Router();
const ControllerRoutes = require("../controller/controllerRoutes");
const upload = require("../helpers/uploadFile");

routes.get("/register", ControllerRoutes.register);
routes.post("/register", upload.single("file"), ControllerRoutes.registerPost);
module.exports = routes;
