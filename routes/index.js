var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { 
        title: 'Safe Hub Feedback',
        message: 'Welcome to our app!!'
    });
});

module.exports = router;
