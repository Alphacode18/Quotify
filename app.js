const { json } = require('body-parser');
const express = require('express');

const app = express();

const _port = 3000 || process.env.PORT;

app.use('/', (req, res, next) => {
  res.json({
    message: 'Hello From Quotify',
  });
  next();
});

app.listen(_port);
