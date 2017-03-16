var express = require('express');
var router = express.Router();
var db = require('../db')

/* /recipe */

/* GET recipes listing. */
router.get('/', function(req, res, next) {
  res.render('recipes');
});

router.get('/all', function(req, res, next) {
    var recipes = db.get().collection('recipes');
    recipes.find().toArray(function(err,data){
          res.json(data);
    })
});

router.get('/addrecipe', function(req, res, next) {
    res.render('addrecipe')
});

router.post('/add', function(req, res, next) {
    var recipes = db.get().collection('recipes');
    recipes.insert({name:req.body.name,serving:req.body.serving,container:req.body.container}).then(function(err,data){
          console.log("Recette ajoutée");
          res.json(data);
    })
});



module.exports = router;
