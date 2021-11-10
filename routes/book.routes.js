const Router = require("express");
const bookController = require('../controllers/book.controller');
const router = new Router();

router.get('/book/:id',bookController.getBook);
router.post('/book',bookController.newBook);
router.delete('/book',bookController.deleteBook);

module.exports = router;