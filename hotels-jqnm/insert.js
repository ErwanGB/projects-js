var mongodb = require('mongodb').MongoClient;

var arr = require('./data/les_hotels_classes_en_ile-de-france.json')

mongodb.connect("mongodb://localhost:27017/hotels", function(err,db){


// Insert Json 

/*    for(var idx in arr){        
        db.collection('hotels').insert(arr[idx])
    }*/

// Add note
    db.collection('hotels').find().toArray(function(err, data) {
            var count = 0;
            for (var item of data){
                var note = parseInt(item.fields.classement.substr(0, 1));
                db.collection('hotels').update(
                    {
                        'recordid': item.recordid
                    },
                    {
                        $set: { "fields.note": note }
                    })
                count++
                console.log("Item : " + count)
            }
    })
  
});
