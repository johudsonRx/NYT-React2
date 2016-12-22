var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.Burger.findAll({
    include: [ models.Burger ]
  }).then(function(burgers) {
    res.render('index', {
      title: 'Eat Da Burger',
      // users: users
    });
  });
});

module.exports = router;