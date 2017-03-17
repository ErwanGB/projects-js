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
    var ObjectId = require('mongodb').ObjectID;
    recipes.find({"_id" : ObjectId(req.params.id)}).toArray(function(err, data) {
        console.log("/one/:id" + err);
        data = data[0];
        res.json(data);
    })
});

router.get('/allrecipes', function(req, res, next) {
    var recipes = db.get().collection('recipes');
    recipes.find({},{name:1,_id:1}).toArray(function(err,data){
          res.json(data);
    })
});

router.post('/add', function(req, res, next) {
    var recipes = db.get().collection('recipes');
    console.log("Insert : " + JSON.stringify(req.body));
    recipes.insert({
            name:req.body.name,
            serving:req.body.serving,
            container:req.body.container,
            ingredients:req.body.ingredients,
            steps:req.body.steps
        }).then(function(err,data){
    })
});

router.patch('/:id/edit', function(req, res, next) {
    // TODO
    res.send(res.params.id + "=> edit");
});

router.delete('/:id/del', function(req, res, next) {
    var recipes = db.get().collection('recipes');    
    var ObjectId = require('mongodb').ObjectID;

    recipes.deleteOne({"_id" : ObjectId(req.params.id)}).then(function(err, data) {
        console.log("/:id/del " + err);
        res.json(data);
    })
});





module.exports = router;
