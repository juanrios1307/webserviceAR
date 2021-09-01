const sql = require("mssql");
const config =require("./config");

var connection ={}

connection.getConnection = async() =>{
    var pool =await sql.connect({
        user: config.dbUser,
        password: config.dbPassword,
        server: config.dbServer,
        database: config.dbDatabase,
        options: {
            encrypt: false, // for azure
            trustServerCertificate: true, // change to true for local dev / self-signed certs
        },
    });
    return pool;
}



module.exports = connection
