var express = require('express');
var controller = require('../components/user');

var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

//User Registeration router
router.post('/v1/register', controller.userReg)

module.exports = router;