const mongoose=require('mongoose')

const mongouri='mongodb+srv://admin:admin@cluster0.ocpxg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//const mongouri=process.env.DB_URI


mongoose.connect(mongouri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db=>console.log('conected to db Mongo'))
    .catch(error=>console.log(error))

module.exports=mongoose
