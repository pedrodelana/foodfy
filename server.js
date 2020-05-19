const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express:server
})

server.get("/", function(req, res){
    return res.render("index");
})

server.listen(3000, function(){
    console.log('server is running');
})