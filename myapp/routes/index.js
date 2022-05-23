var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/', function(req, res, next){

  var n1 = +req.body.v1;
  var n2 = +req.body.v2;

  var soma = n1 + n2;

  res.render('result', {soma:soma, layout:'layouts/adm.hbs'});
});


module.exports = router;
