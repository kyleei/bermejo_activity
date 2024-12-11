const express = require("express");
const router = express.Router();

const { getAllBooks,getBooksByGenre} = require("../controllers/booksController.js");

router.get("/",getAllBooks);
router.get("/:genre",getBooksByGenre);


module.exports = router;