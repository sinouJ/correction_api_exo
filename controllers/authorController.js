const { AuthorModel, ArticleModel } = require('../models/Article')

module.exports = {
    createAuthor: (req, res) => {
        const { name } = req.body
        const author = new AuthorModel({ name })

        author.save( (err, author) => {
            if (err) {
                res.status(500).json({
                    message: err
                })
            }
            else {
                res.status(201).json({
                    status: 201,
                    message: "succes",
                    author
                })
            }
        })
    },
    createArticle: (req, res) => {
        const { author, title } = req.body
        const article = new ArticleModel({ title, author })

        article.save( (err, article) => {
            if (err) {
                res.status(500).json({
                    message: err
                })
            }
            else {
                res.status(201).json({
                    status: 201,
                    message: "succes",
                    article
                })
            }
        })
    },
    findArticlesByUserId: (req, res) => {
        const userId = req.params.author
        ArticleModel.find({ author: userId }, (err, articles) => {
            if (err) {
                res.status(500).json({
                    message: err
                })
            }
            else {
                res.status(200).json({
                    articles
                })
            }
        })
    }
}