const db = require("../models");
const Product = db.produits;
const Categorie = db.categories

//Create and Save a new Product
exports.create = (req, res) => {
    //Validate requeste
    if (!req.body.name || !req.body.price || !req.body.price_prime) {
        res.status(400).send({ message: "Il faut au minimum un nom et un prix" });
        return;
    }

    //Create Product
    const product = {
        name: req.body.name,
        price: req.body.price,
        price_prime: req.body.price_prime,
        img_path: req.body.img_path, // || default path,  path transmis ou path img par défaut
        categorie_id: req.body.categorie_id, // || id par défaut ?
    };

    // Save Product
    Product.create(product)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while saving the Product"
            });
        });
};

// Retrieve all Products from db
exports.findAll = (req, res) => {
    Product.findAll({ include: Categorie })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Products."
            });
        });
};

// Find a single Product with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Product.findByPk(id, { include: Categorie })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(400).send({ message: `Cannot find Product with id : ${id}` });
            }
        })
        .catch(err => {
            res.status(500).send({ message: `Error retrieving Product with id : ${id}` });
        });
};

// Update a Product by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Product.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Product was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Product with id=" + id
            });
        });
};

// Delete a Product with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Product.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Product was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Product with id=" + id
            });
        });
};


// Find all visible Products
exports.findAllVisible = (req, res) => {
    Product.findAll({ where: { include: Categorie, Visible: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Products."
            });
        });
};