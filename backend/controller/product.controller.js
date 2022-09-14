// Find all visible Products
exports.findAllVisible = (req, res) => {
    Product.findAll({ where: { Visible: true } })
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