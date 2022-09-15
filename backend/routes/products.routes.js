module.exports = app => {
    const products = require("../controller/product.controller");
    const router = require("express").Router();

    //Add one
    router.post("/", products.create);

    //Get all
    router.get("/", products.findAll);

    //Get all visible
    router.get("/all", products.findAllVisible);

    //Get one
    router.get("/:id", products.findOne);

    //update one
    router.put("/:id", products.update);

    //Delete one
    router.delete("/:id", products.delete);

    app.use('/products', router);
}