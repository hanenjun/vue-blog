const mysql = require("mysql");
const {contentMysql} = require("./mysql-content-config");
const contentMysqlConn = mysql.createConnection({
    host:contentMysql.host,
    database:contentMysql.database,
    user:contentMysql.user,
    password:contentMysql.password,
    port:contentMysql.port
})

module.exports = {
    contentMysqlConn
   
};