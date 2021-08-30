var dbConn = require ('./databaseMySQL')

var Object = function(object){

        this.CONS_PPT = object.CONS_PPT
        this.FINAL = object.FINAL
        this.CODIGO_COMPLETO = object.CODIGO_COMPLETO
        this.DESCRIPCION = object.DESCRIPCION
        this.FONDO = object.FONDO
        this.VLR_APROBADO = object.VLR_APROBADO
        this.VLR_TOT_AP = object.VLR_TOT_AP
        this.VLR_TOT_RP = object.VLR_TOT_RP
        this.VLR_TOT_TP_AD = object.VLR_TOT_TP_AD
        this.VLR_TOT_TP_RE = object.VLR_TOT_TP_RE
        this.VLR_TOT_PPTO = object.VLR_TOT_PPTO
        this.VLR_SAL_CAJA = object.VLR_SAL_CAJA
        this.VLR_ING_MES_ANT = object.VLR_ING_MES_ANT
        this.VLR_ING_MES_ACT = object.VLR_ING_MES_ACT
        this.VLR_TOT_ING  = object.VLR_TOT_ING
        this.A_VLR_TOT_PPTO_A_VLR_TOT_ING = object.A_VLR_TOT_PPTO_A_VLR_TOT_ING


}

Object.create = function(obejct, result) {
    dbConn.query("INSERT INTO objects set ?",obejct,function(err,res){
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{

            result(null, res.insertId);
        }

    })
}

module.exports = Object
