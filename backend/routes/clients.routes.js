module.exports = app => {
    const clients = require("../controller/client.controller");
    const router = require("express").Router();

    //Add one
    router.post("/", clients.create);

    //Get all
    router.get("/", clients.findAll);

    //Get one
    router.get("/:id", clients.findOne);

    //update one
    router.put("/:id", clients.update);

    //Delete one
    router.delete("/:id", clients.delete);

    //refill one
    router.put("/refill/:id", clients.refill);

    app.use('/clients', router);
}