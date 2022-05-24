var express = require('express');
var router = express.Router();

const authorController = require('../controllers/authorController')

/* GET home page. */
router.route('/author').post(authorController.createAuthor)
router.route('/article').post(authorController.createArticle)
router.route('/article/:author').get(authorController.findArticlesByUserId)

module.exports = router;
