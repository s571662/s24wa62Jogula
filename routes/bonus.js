var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {

    var num1 = Math.floor(Math.random());
    var num2 = Math.floor(Math.random());

    var result1 = Math.round(num1);
    var result2 = Math.round(num2);

    console.log(result1);
    console.log(result2);


    res.send(`Math.round applied on ${num1} and ${num2} is ${result1} and ${result2}`);
});

module.exports = router;
