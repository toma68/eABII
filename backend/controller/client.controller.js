const db = require("../models");
const Client = db.clients;

//Create and Save a new Client
exports.create = (req, res) => {
    //Validate requeste
    if (!req.body.name) {
        res.status(400).send({ message: "Contenu ne peut pas être vide" });
        return;
    }

    //Create Client
    const Client = {
        name: req.body.name,
        balance: 0,
        premium: '2000-01-01'
    };

    // Save Client
    Client.create(Client)
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
    const name = req.query.name;
    let condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    Client.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Clients."
            });
        });
};

// Find a single Client with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Client.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(400).send({ message: `Cannot find Client with id : ${id}` });
            }
        })
        .catch(err => {
            res.status(500).send({ message: `Error retrieving Client with id : ${id}` });
        });
};

// Update a Client by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Client.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Client was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Client with id=${id}. Maybe Client was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Client with id=" + id
            });
        });
};

//upgrade to premium
// exports.upgrade = (req, res) => {
//     const id = req.params.id;
//     const duree = req.params.duree;
//     if (duree >= ) {

//     }
//     Client.

// }

// Delete a Client with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Client.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Client was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Client with id=${id}. Maybe Client was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Client with id=" + id
            });
        });
};

exports.refill = (req, res) => {
    const id = req.params.id;
    const amount = req.body.amount;
    Client.findByPk(id)
        .then(data => {
            if (data) {
                Client.update({ balance: data.balance + amount }, {
                    where: { id: id }
                })
                    .then(num => {
                        if (num == 1) {
                            res.send({
                                message: "Client was updated successfully."
                            });
                        } else {
                            res.send({
                                message: `Cannot update Client with id=${id}. Maybe Client was not found or req.body is empty!`
                            });
                        }
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: "Error updating Client with id=" + id
                        });
                    });
            } else {
                res.status(400).send({ message: `Cannot find Client with id : ${id}` });
            }
        })
        .catch(err => {
            res.status(500).send({ message: `Error retrieving Client with id : ${id}` });
        });
}