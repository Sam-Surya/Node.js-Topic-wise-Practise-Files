const  mysql = require('mysql');  


const  connection = mysql.createConnection({  
  host: "localhost",  
  user: "root",  
  password: "",
  port: "3306",
  database:"test1"

});  


connection.connect((err) =>{

    if (err) throw err;
    console.log("Connected!");

    var sql = "UPDATE students SET name ='chandru' WHERE class=10";

    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table Updated");
    });
    
  });
