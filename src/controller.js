const ControllerMain={}
const mongoose = require('mongoose')
const axios = require('axios')
const {Schema} = require("mongoose");

ControllerMain.api = async (req,res) =>{

    const url = req.headers['url'];

    const config = {
        method: 'get',
        url: url,

    };

    const respuesta = await axios(config)

    //Propuesta 1
    /*Object.create(new Object(respuesta.data[0]), function(err, object) {
        if (err)
            res.send(err);
        else
            res.json({error:false,message:"Object Added!"});
    });*/

    //Propuesta 2
    var thingSchema = new Schema({}, { strict: false });
    var Thing = mongoose.model('Thing', thingSchema);
    var thing = new Thing(respuesta.data[0]);


    thing.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.send(err);
        });

}

module.exports=ControllerMain
