const Router = require("express");
const authorControllers = require('../controllers/author.controller');

const router = new Router();

router.route('/author')
    .post(authorControllers.newAuthor)
    .delete(authorControllers.deleteAuthor);

module.exports = router;