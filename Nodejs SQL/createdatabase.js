const  mysql = require('mysql');  


const  connection = mysql.createConnection({  
  host: "localhost",  
  user: "root",  
  password: "",
  port: "3306"
});  



connection.connect( (err)=> {
  if (err) throw err;
  console.log("Connected!");

  connection.query("CREATE DATABASE IF NOT EXISTS test1",  (err, result)=> {
    if (err) throw err;
    console.log("Database created");

  });

});