const  {Router} =require('express')
const route=Router()
const  controller=require('./controller.js')


route.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin","http://localhost:3000/")
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTIONS");
    next()
});

route.get('/',controller.api)

module.exports =route
