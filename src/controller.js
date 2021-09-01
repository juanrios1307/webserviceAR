const ControllerMain={}
const axios = require('axios')
const Object = require('./model')

ControllerMain.api = async (req,res) =>{

    const url = req.headers['url'];

    const config = {
        method: 'get',
        url: url,

    };

    const respuesta = await axios(config)

    console.log(respuesta.data[0])

    //Propuesta 1 SQL
    for(var i =0; i<respuesta.data.length ; i++){

        await Object.create(new Object(respuesta.data[i]));


    }

    res.json("OK")



    //Propuesta 2
    /*var thingSchema = new Schema({}, { strict: false });
    var Thing = mongoose.model('data', thingSchema);
    var thing = new Thing(respuesta.data[0]);


    thing.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.send(err);
        });*/

}

module.exports=ControllerMain
