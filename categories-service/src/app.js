const express = require("express");
const bodyParser = require('body-parser');
const categoriesRoutes = require('./routes/categoriesRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/categories', categoriesRoutes);

app.listen(5000, () => {
  console.log("Categories service running at port 5000");
});