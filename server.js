const express = require('express');
const server = express();

server.get("/", function(req, res){
    return res.send("Hi!")
})

server.listen(3000, function(){
    console.log('server is running');
})