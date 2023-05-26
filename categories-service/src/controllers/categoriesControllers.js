const categoryModel = require('../models/categoriesModel');

const getCategoryById = (req, res) => {
  const id = parseInt(req.params.id);
  const category = categoryModel.find(category => category.id === id);
  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ error: 'Category not found' });
  }
};

const getAllCategories = (req, res) => {
  res.json(categoryModel);
};

const createCategory = (req, res) => {
  const { id, name } = req.body;
  const newCategory = { id, name };
  categoryModel.push(newCategory);
  res.status(201).json(newCategory);
};

const updateCategory = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  const category = categoryModel.find(category => category.id === id);
  if (category) {
    category.name = name || category.name;
    res.json(category);
  } else {
    res.status(404).json({ error: 'Category not found' });
  }
};

const deleteCategory = (req, res) => {
  const id = parseInt(req.params.id);
  const categoryIndex = categoryModel.findIndex(category => category.id === id);
  if (categoryIndex !== -1) {
    const deletedCategory = categoryModel.splice(categoryIndex, 1);
    res.json(deletedCategory[0]);
  } else {
    res.status(404).json({ error: 'Category not found' });
  }
};

module.exports = {
  getCategoryById,
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory
};