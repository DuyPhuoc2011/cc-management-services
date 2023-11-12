const express = require('express');
const cors = require('cors');
const app = express();
const clientRouter = require('./routes/client');

app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());

app.use('/clients', clientRouter);

app.listen(8080, () => console.log('Server is running'));