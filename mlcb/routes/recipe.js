var express = require('express');
var router = express.Router();
var db = require('../db')


/**** Views *****/

router.get('/all', function(req, res, next) {
    res.render('allrecipes');
});

router.get('/view/:id', function(req, res, next) {
    var id = req.params.id
    res.render('recipe',{id});
});

router.get('/add', function(req, res, next) {
    res.render('addrecipe')
});



/***** API *****/

router.get('/one/:id', function(req, res) {
    var recipes = db.get().collection('recipes');
    recipes.find({'_id':req.params.id}).toArray(function(err, data) {
        data = data[0];
        res.json(data);
    })
});

router.get('/allrecipes', function(req, res, next) {
    var recipes = db.get().collection('recipes');
    recipes.find().toArray(function(err,data){
          res.json(data);
    })
});

router.post('/add', function(req, res, next) {
    var recipes = db.get().collection('recipes');
    console.log("Before insert" + JSON.stringify(req.body));
    recipes.insert({name:req.body.name,serving:req.body.serving,container:req.body.container}).then(function(err,data){
          console.log("Recette ajoutée");
    })
});

router.patch('/:id/edit', function(req, res, next) {
    // TODO
    res.send(res.params.id + "=> edit");
});

router.post('/:id/del', function(req, res, next) {
    // TODO
    res.send(res.params.id + "=> delete")
});





module.exports = router;
