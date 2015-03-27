var express = require('express');
var router = express.Router();

router.post('/submit', function(req, res) {
    res.send('Someday this will be useful!');
});

module.exports = router;
