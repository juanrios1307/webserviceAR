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

    //Propuesta 1 SQL
    for(var i =0; i<respuesta.data.length ; i++){
        Object.create(new Object(respuesta.data[i]), function(err, object) {
            if (err)
                res.send(err);
            else {
                if (i = respuesta.data.length-1) {
                    res.json({error: false, message: "Object Added!"});
                }
            }
        });
    }



    //Propuesta 2
    /*var thingSchema = new Schema({}, { strict: false });
    var Thing = mongoose.model('data', thingSchema);
    var thing = new Thing(respuesta.data[0]);*/


    thing.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.send(err);
        });

}

module.exports=ControllerMain
