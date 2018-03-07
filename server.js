var express = require('express');
var sqlite3 = require('sqlite3');
var bodyParser = require('body-parser');

var app = express();
var db = new sqlite3.Database('HelloExpress.db');

app.use(express.static(__dirname + '/views'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/scripts'));
//Store all JS and CSS in Scripts folder.
app.use(bodyParser.urlencoded({ extended: true }));
//Need so we can access form items later

var port = 3000;

app.get('/', function(request, response){
    response.sendFile("/home/joepost/Documents/Edx/DEV280x/hello-express/views/history.html");
});

app.get('/add_info', function(request, response){
    response.sendFile("/home/joepost/Documents/Edx/DEV280x/hello-express/views/add_info.html");
});

app.post('/settings_change', function(request, response){
    console.log(request.body.name + request.body.email);

    db.run("INSERT INTO users VALUES (?, ?)", [request.body.name, request.body.email], function(err){
        if(err){
            console.log(err);
        }
    });
    response.redirect("/");
        // response.send("Great Sucess");
});

app.get('/history', function(request, response){
    db.all("SELECT * FROM users",
        function(err, rows){
            console.log("GET Request for users");
            response.send(rows);
    });
});

app.listen(port, function(){
    console.log('Express app listening on port ' + port);
});