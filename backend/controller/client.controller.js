const db = require("../models");
const Client = dn.Client;
const Op = db.Sequelize.Op;

//Create and Save a new Client
exports.create = (req, res) => {
    //Validate requeste
    if (!req.body.name) {
        res.status(400).send({ message: "Contenu ne peut pas être vide" });
        return;
    }

    //Create Client
    const client = {
        name: req.body.name,
        balance: 0
    };

    // Save Client
    Client.create(client)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while saving the Client"
            });
        });
};

// Retrieve all Clients from db
exports.findAll = (req, res) => {

};

// Find a single Client with an id
exports.findOne = (req, res) => {

};

// Update a Client by the id in the request
exports.update = (req, res) => {

};

// Delete a Client with the specified id in the request
exports.delete = (req, res) => {

};

// Find all published Clients
exports.findAllPublished = (req, res) => {

};