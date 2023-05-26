const express = require("express");
const booksControllers = require("../controllers/booksControllers");

const router = express.Router();

router.get("/", booksControllers.getAllBooks);
router.get("/:id", booksControllers.getBookById);
router.post("/", booksControllers.createBook);
router.put("/:id", booksControllers.updateBook);
router.delete("/:id", booksControllers.deleteBook);

module.exports = router;