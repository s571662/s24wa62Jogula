var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {

    var x = Math.floor(Math.random());

    if (req.query.x){
        x= parseInt(req.query.x);
    }
    function round() {
        return Math.round(x);
    }

    console.log(round(x))


    res.send(`Math.round applied to ${x} is ${round(x)} `);

});

module.exports = router;
