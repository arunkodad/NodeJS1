var express = require("express");
var app = express();

var port = process.env.PORT;

var eventRouter = require('./src/routes/eventRoutes');

var dbRouter = require('./src/routes/dbRoutes');

app.use(express.static('public'));
app.use(express.static('bower_components')); 

app.set('views','./src/views');

app.set('view engine','ejs');

app.use ('/Events',eventRouter);        
app.use ('/Db',dbRouter);


app.get('/',function(req, res){
// 		res.send ("hey there this is arun kodad");
        res.render('index', 
        { 
            list:['1stval', '2nd val', '3rd val'],
            nav:[{Link:'services', Text:'services'},
                 {Link:'portfolio', Text:'portfolio'},
                 {Link:'about', Text:'about'},
                 {Link:'team', Text:'team'},
                 {Link:'contact', Text:'contact'},
                 {Link:'Events',Text:'Events'}
                ]
            
            
        });
});

app.get('/routing',function(req, res){
		res.send ("hey there this is routing test");
});

app.listen(port,function(err){
    
    console.log('the server is running in port' + port);
    
    
});