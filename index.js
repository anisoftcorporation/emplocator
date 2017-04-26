var app = require('express')();
var http = require('http').Server(app);


app.get('/', function(req, res){
 // res.sendFile('index.html');
 res.sendFile(__dirname+'/pandora.txt');
});


http.listen(process.env.PORT||5000, function(){
  console.log('listening on *:3000');
});