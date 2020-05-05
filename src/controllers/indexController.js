exports.get = (req, res) => {
    res.status(200).render('index');
};

exports.post = (req, res) => {
    res.status(200).redirect('/')
};