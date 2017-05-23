var express = require('express');
var router  = express.Router();
/* GET users listing. */
router.post('/', function(req, res, next) {
    if ((req.body.userName === 'blake' && req.body.password === 'faith') ||
    	(req.body.userName === '' && req.body.password === '')) {
        res.send({
            authentication: 'success'
        });
    } else {
        res.status(403).send({
            authentication: 'fail'
        });
    }
});
module.exports = router;
