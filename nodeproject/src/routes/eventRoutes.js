var express = require("express");
var eventRouter = express.Router();

var mongodb = require('mongodb').MongoClient;
                   
eventRouter.route ('/')
        .get(function (req,res){
            var url = 'mongodb://localhost:27017/eventsApp';
            mongodb.connect(url, function (err, db){
                var collection = db.collection ('events');
                collection.find({}).toArray(function(err,results){
                    res.render("events",{ 
                        list:['1st Event', '2nd Event', '3rd Event'],
                         nav:[{Link:'services', Text:'services'},
                              {Link:'portfolio', Text:'portfolio'},
                              {Link:'about', Text:'about'},
                              {Link:'team', Text:'team'},
                              {Link:'contact', Text:'contact'},
                              {Link:'Events',Text:'Events'}
                    ],
                    events : results          
                });
        });
});
});
        

// eventRouter.route ('/:id')
//         .get(function (req,res){
//           var id = req.params.id;
//             res.render("event",
//             { 
//             list:['1st Event', '2nd Event', '3rd Event'],
//             nav:[{Link:'services', Text:'services'},
//                  {Link:'portfolio', Text:'portfolio'},
//                  {Link:'about', Text:'about'},
//                  {Link:'team', Text:'team'},
//                  {Link:'contact', Text:'contact'},
//                  {Link:'Events',Text:'Events'}
//                 ],
//             events : eventsData[id]
//           });
//         });           
module.exports = eventRouter;
