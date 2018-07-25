const router = require("express").Router();
var mongoose = require("mongoose");

const Article = require("../models/article.js");

router.get("/api/articles", function (req, res) {
    Article.Articles.find({})
        .then(() => {
            res.json(dbArticles);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.post("/api/articles", function (req, res) {
    Article.create(req.body)
        .then(() => {
            res.json(true);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;