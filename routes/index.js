var express = require('express');
var router = express.Router();

const authorController = require('../controllers/authorController')
const userController = require('../controllers/userController')

// User routes
router.route('/user').post(userController.saveUsers)
router.route('/user/:userId').get(userController.getUser)
router.route('/user/:userId').put(userController.updateUser)
router.route('/user/:userId').delete(userController.deleteUser)

// Author routes
router.route('/author').post(authorController.createAuthor)

// Article routes
router.route('/article').post(authorController.createArticle)
router.route('/article/:author').get(authorController.findArticlesByUserId)

module.exports = router;
