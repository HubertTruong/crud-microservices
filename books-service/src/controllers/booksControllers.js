const axios = require("axios");
const bookModel = require("../models/booksModel");

const getBookById = async (req, res) => {
  const id = parseInt(req.params.id);
  const book = bookModel.find(book => book.id === id);
  if (book) {
    try {
      const [author, category] = await Promise.all([
        axios.get(`http://localhost:4000/authors/${book.authorId}`),
        axios.get(`http://localhost:5000/categories/${book.categoryId}`)
      ]);

      const bookDetails = {
        id: book.id,
        title: book.title,
        author: author.data.name,
        category: category.data.name
      };

      res.json(bookDetails);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(404).json({ error: "Book not found" });
  }
};

const getAllBooks = (req, res) => {
  res.json(bookModel);
};

const createBook = (req, res) => {
  const { id, title, authorId, categoryId } = req.body;
  const newBook = { id, title, authorId, categoryId };
  bookModel.push(newBook);
  res.status(201).json(newBook);
};

const updateBook = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, authorId, categoryId } = req.body;
  const book = bookModel.find(book => book.id === id);
  if (book) {
    book.title = title || book.title;
    book.authorId = authorId || book.authorId;
    book.categoryId = categoryId || book.categoryId;
    res.json(book);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
};

const deleteBook = (req, res) => {
  const id = parseInt(req.params.id);
  const bookIndex = bookModel.findIndex(book => book.id === id);
  if (bookIndex !== -1) {
    const deletedBook = bookModel.splice(bookIndex, 1);
    res.json(deletedBook[0]);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
};

module.exports = {
  getBookById,
  getAllBooks,
  createBook,
  updateBook,
  deleteBook
};