const express = require("express");
const bodyParser = require('body-parser');
const authorsRoutes = require('./routes/authorsRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/authors', authorsRoutes);

app.listen(4000, () => {
  console.log("Authors service running at port 4000");
});