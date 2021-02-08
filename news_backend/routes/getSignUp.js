var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getSignUP', function(req, res) {
  res.send('respond with a resource getSignUp');
});
router.get('/', function(req, res) {
    res.send('respond with a resource getLogin');
  });

module.exports = router;
