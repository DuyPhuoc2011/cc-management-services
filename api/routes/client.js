const express = require('express');
const router = express.Router();
const utils = require('../../db/utils');

router.get('/', (req, res) => {
    utils.fetchClientsList().then(data => {
        res.status(200).json(data);
    }).catch(error => {
        res.send(error);
    });
});

router.post('/', (req, res) => {
    var newClientName = req.body.clientName;
    var newClientDes = req.body.clientDes;
    utils.insertClient(newClientName, newClientDes).then(data => {
      res.status(200).json(data);
    }).catch(error => {
      res.send(error);
    });
  });

module.exports = router;