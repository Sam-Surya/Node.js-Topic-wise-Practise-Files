const  mysql = require('mysql');  


const  connection = mysql.createConnection({  
  host: "localhost",  
  user: "root",  
  password: "",
  port: "3306",
  database:"test1"
});  


connection.connect((err)=> {
    if (err) throw err;
    connection.query("SELECT * FROM students LIMIT 3", (err, result, fields) =>{
      if (err) throw err;
      console.log(result);
    });
  });
