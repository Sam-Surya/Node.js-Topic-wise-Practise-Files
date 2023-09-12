const  mysql = require('mysql');  


const  connection = mysql.createConnection({  
  host: "localhost",  
  user: "root",  
  password: "",
  port: "3306",
  database:"test1"

});  
/*

connection.connect((err)=> {
    if (err) throw err;
    console.log("Connected!");

    var sql = "CREATE TABLE students1 (name VARCHAR(255), class VARCHAR(255))";
    connection.query(sql, (err, result)=> {
      if (err) throw err;
      console.log("Table created");
    });
  });
*/

  connection.connect((err)=> {
    if (err) throw err;
   
    connection.query("DROP TABLE students1",  (err, result) =>{
      if (err) throw err;
      console.log("Table deleted");
    });
  });
  
