var express = require('express');
var controller = require('../components/user');
var middleware = require('../lib/middleware');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

//User Registeration router
router.post('/v1/register', controller.userReg)

//User Login router
router.post('/v1/login', controller.userLogin)

//view User
router.post('/v1/view',middleware.validateToken,controller.viewUser)

module.exports = router;