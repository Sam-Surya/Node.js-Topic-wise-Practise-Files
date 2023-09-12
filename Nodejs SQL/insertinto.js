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

    var sql = "INSERT INTO students VALUES ('Sai','7'),('Abi','2'),('sakthi','1')";

    connection.query(sql,  (err, result) =>{
      if (err) throw err;
      console.log("Inserted");
    });
    
  });




