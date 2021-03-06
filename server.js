const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const receitas = require("./data");

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express:server
})


server.get("/", function(req, res){
    return res.render("index", {item:receitas});
})

server.get("/about", function(req, res){
    return res.render("about");
})

server.get("/recipes", function(req, res){
    return res.render("recipes", {item:receitas});
})

server.use(function(req, res){
    res.status(404).render("not-found");
})

server.listen(5000, function(){
    console.log('server is running');
})