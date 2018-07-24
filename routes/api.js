const router = require('express').Router();
const Article = require('../models/articles.js');

router.post('/api/articles', function (req, res) {
    Article.create(req.body)
        .then((results) => {
            res.json(results);
        }).catch((err) => {
            console.log(err);
        });
});

module.exports = router;