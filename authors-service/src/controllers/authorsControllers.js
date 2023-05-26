const authorModel = require('../models/authorsModels');

const getAuthorById = (req, res) => {
  const id = parseInt(req.params.id);
  const author = authorModel.find(author => author.id === id);
  if (author) {
    res.json(author);
  } else {
    res.status(404).json({ error: 'Author not found' });
  }
};

const getAllAuthors = (req, res) => {
  res.json(authorModel);
};

const createAuthor = (req, res) => {
  const { id, name, nationality } = req.body;
  const newAuthor = { id, name, nationality };
  authorModel.push(newAuthor);
  res.status(201).json(newAuthor);
};

const updateAuthor = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, nationality } = req.body;
  const author = authorModel.find(author => author.id === id);
  if (author) {
    author.name = name || author.name;
    author.nationality = nationality || author.nationality;
    res.json(author);
  } else {
    res.status(404).json({ error: 'Author not found' });
  }
};

const deleteAuthor = (req, res) => {
  const id = parseInt(req.params.id);
  const authorIndex = authorModel.findIndex(author => author.id === id);
  if (authorIndex !== -1) {
    const deletedAuthor = authorModel.splice(authorIndex, 1);
    res.json(deletedAuthor[0]);
  } else {
    res.status(404).json({ error: 'Author not found' });
  }
};

module.exports = {
  getAuthorById,
  getAllAuthors,
  createAuthor,
  updateAuthor,
  deleteAuthor
};