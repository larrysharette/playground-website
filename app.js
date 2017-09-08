const express = require('express')
const app = express()
var cors = require('cors')

app.use(express.static(__dirname));


const corsOptions = {
  origin: 'https://maps.googleapis.com'
}

app.use(cors(corsOptions))

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
})

app.get('/', function(req, res){
    res.sendfile('layout.html');
});

app.listen(process.env.PORT || 3000, function(){
    console.log('The app is running');
})