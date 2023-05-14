const express = require('express');

const routes = require('./routes');

require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.use('/', routes);

app.listen(port, () => {
  console.log(`App listening to port ${port}`);
});
