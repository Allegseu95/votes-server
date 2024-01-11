const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const routes = require('./routes');
const { env } = require('./config');
const { notFound } = require('./middlewares');

const app = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

// log http requests in dev mode
if (env.NODE_STAGE === 'dev') {
  const morgan = require('morgan');
  app.use(morgan('dev'));
}

// v1 api routes
app.use('/v1', routes);

// send back a 404 error for any unknown api request
app.use(notFound);

module.exports = {
  app
};
