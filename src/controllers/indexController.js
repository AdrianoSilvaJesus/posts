exports.get = (req, res) => {
    res.status(200).send()

};

exports.post = (req, res) => {
    const nomeUser = req.body;
    res.send(nomeUser)
};
