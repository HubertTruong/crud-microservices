const express = require("express");
const bodyParser = require('body-parser');
const booksRoutes = require('./routes/booksRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/books', booksRoutes);

app.listen(3000, () => {
  console.log("Server running at port 3000");
});