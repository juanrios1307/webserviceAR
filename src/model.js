const con = require('./databaseMySQL')
const sql = require("mssql");
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

Object.create = async function(obj) {
    try {
        const pool = await con.getConnection()

        await pool
            .request()
            .input("CONS_PPT", sql.VarChar, obj.CONS_PPT)
            .input("FINAL", sql.VarChar, obj.FINAL)
            .input("CODIGO_COMPLETO", sql.VarChar, obj.CODIGO_COMPLETO)
            .input("DESCRIPCION", sql.VarChar, obj.DESCRIPCION)
            .input("FONDO", sql.VarChar, obj.FONDO)
            .input("VLR_APROBADO", sql.VarChar, obj.VLR_APROBADO)
            .input("VLR_TOT_AP", sql.VarChar, obj.VLR_TOT_AP)
            .input("VLR_TOT_RP", sql.VarChar, obj.VLR_TOT_RP)
            .input("VLR_TOT_TP_AD", sql.VarChar, obj.VLR_TOT_TP_AD)
            .input("VLR_TOT_TP_RE", sql.VarChar, obj.VLR_TOT_TP_RE)
            .input("VLR_TOT_PPTO", sql.VarChar, obj.VLR_TOT_PPTO)
            .input("VLR_SAL_CAJA", sql.VarChar, obj.VLR_SAL_CAJA)
            .input("VLR_ING_MES_ANT", sql.VarChar, obj.VLR_ING_MES_ANT)
            .input("VLR_ING_MES_ACT", sql.VarChar, obj.VLR_ING_MES_ACT)
            .input("VLR_TOT_ING", sql.VarChar, obj.VLR_TOT_ING)
            .input("A_VLR_TOT_PPTO_A_VLR_TOT_ING", sql.VarChar, obj.A_VLR_TOT_PPTO_A_VLR_TOT_ING)
            .query( "INSERT INTO objects " +
                "(CONS_PPT,FINAL,CODIGO_COMPLETO,DESCRIPCION,FONDO,VLR_APROBADO,VLR_TOT_AP,VLR_TOT_RP,VLR_TOT_TP_AD," +
                "VLR_TOT_TP_RE,VLR_TOT_PPTO,VLR_SAL_CAJA,VLR_ING_MES_ANT,VLR_ING_MES_ACT,VLR_TOT_ING,A_VLR_TOT_PPTO_A_VLR_TOT_ING) " +
                "VALUES " +
                "(@CONS_PPT,@FINAL,@CODIGO_COMPLETO,@DESCRIPCION,@FONDO,@VLR_APROBADO,@VLR_TOT_AP,@VLR_TOT_RP,@VLR_TOT_TP_AD," +
                "@VLR_TOT_TP_RE,@VLR_TOT_PPTO,@VLR_SAL_CAJA,@VLR_ING_MES_ANT,@VLR_ING_MES_ACT,@VLR_TOT_ING,@A_VLR_TOT_PPTO_A_VLR_TOT_ING);")

    }catch (error){
        console.log("error: ", error);

    }
}

module.exports = Object
