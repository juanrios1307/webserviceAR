const express=require('express')
const app=express()
const bodyparser=require('body-parser')

//require('./databaseMySQL')
require('./databaseMongoDB')

app.set('Port',5000)

app.use(bodyparser.urlencoded({extend:true}))
app.use(bodyparser.json())

app.use('/api/',require('./route.js'))

//start server
app.listen(process.env.PORT || 5000,()=>{
    console.log('Listen in the port ',process.env.PORT || 5000)
})
