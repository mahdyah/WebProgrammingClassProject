const mysql = require('mysql');


 const db = mysql.createConnection({
  host:'homecaredb.clcchrd8h5vh.us-east-2.rds.amazonaws.com',
    user:'admin',
    password:'Myhomecare57!',
    database:'homecaredb'
})

module.exports = {db}
