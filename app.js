var express = require('express');
var cors = require('cors');
//var cors = require('cors')
var app = express();
// in NodeJS/Express (server)

app.use(express.static(__dirname + '/app'));
app.use(cors());


app.post('https', function(req, res){

});

app.listen(process.env.PORT || 3000);


