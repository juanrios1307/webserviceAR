var mysql = require('mysql');
const config = require("./config.json");

var con = mysql.createConnection({
    host: config.host_mysql,
    user: config.username_mysql,
    password: config.pwd_mysql,
    database: config.dbname_mysql,
    port: config.port_mysql
});

con.connect(function(err) {
    if (err)
        throw err;
    console.log("Connected TO DB Mysql!");

});

module.exports = con
