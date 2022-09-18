const db = require("../models");
const Product = db.produits;
const Categorie = db.categories

//Create and Save a new Categorie
exports.create = (req, res) => {
    //Validate requeste
    if (!req.body.name) {
        res.status(400).send({ message: "Contenu ne peut pas être vide" });
        return;
    }

    //Create Categorie
    const categorie = {
        libelle: req.body.name,
    };

    // Save Categorie
    Categorie.create(categorie)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while saving the Categorie"
            });
        });
};

// Retrieve all Categories from db
exports.findAll = (req, res) => {
    Categorie.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Categories."
            });
        });
};

//Get all categories with the list of associated products
exports.findAllProductsOrderedByCat = (req, res) => {
    Categorie.findAll({ include: Product })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Categories."
            });
        });
};

// Find a single Categorie with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Categorie.findByPk(id, { include: Categorie })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(400).send({ message: `Cannot find Categorie with id : ${id}` });
            }
        })
        .catch(err => {
            res.status(500).send({ message: `Error retrieving Categorie with id : ${id}` });
        });
};

// Update a Categorie by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Categorie.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Categorie was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Categorie with id=${id}. Maybe Categorie was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Categorie with id=" + id
            });
        });
};

// Delete a Categorie with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Categorie.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Categorie was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Categorie with id=${id}. Maybe Categorie was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Categorie with id=" + id
            });
        });
};


// Find all visible Categories
exports.findAllVisible = (req, res) => {
    Categorie.findAll({ where: { include: Categorie, Visible: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Categories."
            });
        });
};