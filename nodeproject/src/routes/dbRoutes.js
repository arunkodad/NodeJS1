var express = require("express");
var dbRouter = express.Router();

var mongodb = require('mongodb').MongoClient;


var eventsData = [{
                    name: "Event 1",
                    description: "the first Event",
                    date:'2016/10/10',
                    time:'10 AM',
                    duration:'1hour',
                    location : {
                        streetAddress: "1st street",
                        city: "SFO",
                        state:"California",
                        zip:"94040",
                        lon:"something",
                        lat:"Something"
                            },
                   Capacity:100
                   },
                   {
                   name: "Event 2",
                    description: "the Second Event",
                    date:'2016/11/10',
                    time:'10 AM',
                    duration:'2hours',
                    location:{
                        streetAddress: "1st street",
                        city: "LA",
                        state:"California",
                        zip:"94000",
                        lon:"something",
                        lat:"Something"
                            },
                   Capacity:200
                   },
                   {
                   name: "Event 3",
                    description: "the third Event",
                    date:'2016/12/12',
                    time:'10 AM',
                    location:{
                        streetAddress: "1st street",
                        city: "NY",
                        state:"NY",
                        zip:"94040",
                        lon:"something",
                        lat:"Something"
                            },
                   Capacity:300
                   },
                   {
                    name: "Event 4",
                    description: "the fourth Event",
                    date:'2017/01/01',
                    time:'10 AM',
                    location:{
                        streetAddress: "1st street",
                        city: "SFO",
                        state:"California",
                        zip:"94040",
                        lon:"something",
                        lat:"Something"
                            },
                   Capacity:400
                   }
                 ];


dbRouter.route ('/AddEventData')
        .get(function (req,res){
            
           
            });
           


module.exports = dbRouter;