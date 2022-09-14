module.exports = app => {
    const categorie = require("../controller/categories.controller");
    const router = require("express").Router();

    //Add one
    router.post("/", categorie.create);

    //Get all
    router.get("/", categorie.findAll);

    //Get all visible
    router.get("/products", categorie.findAllProductsOrderedByCat);

    //Get one
    router.get("/:id", categorie.findOne);

    //update one
    router.put("/:id", categorie.update);

    //Delete one
    router.delete("/:id", categorie.delete);

    app.use('/categories', router);
}