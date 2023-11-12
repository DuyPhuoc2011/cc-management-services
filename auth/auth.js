const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const utils = require('../db/utils');
// const bodyParser = require('body-parser');

const accessTokenSecret = 'pnsecrettoken';

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    //Authentication condition
    utils.fetchUser(email).then((result) => {
        if(password == result[0].password){
            const accessToken = jwt.sign({email: email, role: result[0].role}, accessTokenSecret);
            res.json({errorCode: 0, token: accessToken});
        } else {
            res.send({errorCode: 1, token: ''});
        }
    }).catch((err) => {
        res.status(500).json({errorCode: 1, token: ''});
    });

});

app.listen(4200, () => {
    console.log('Auth service is running');
});