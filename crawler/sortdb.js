var mongodb = require('mongodb').MongoClient;


mongodb.connect("mongodb://localhost:27017/mlcb", function(err,db){

    db.collection('ingraw').aggregate(
        {"$group" : { "_id": "$name", "count": { "$sum": 1 } } },
        {"$match": {"_id" :{ "$ne" : null } , "count" : {"$gt": 2} } }, 
        {"$project": {"name" : "$_id", "_id" : 0} }
    ).toArray(function(err,data){
        console.log(data);
    })

})