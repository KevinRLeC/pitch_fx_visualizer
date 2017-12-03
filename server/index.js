// Importing node modules
const express = require('express');
const morgan = require('morgan');
const path = require('path');
// Importing source files
const routes = require('./routes/main.routes.js');

const cors = require('cors');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(cors())
  app.use(morgan('dev'))
}
app.use('/api', routes);

// arrow functions
const server = app.listen(process.env.PORT || 3001, () => {
	// destructuring
  const {address, port} = server.address();

  // string interpolation:
  console.log(`Example app listening at http://${address}:${port}`);
});
