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
    connection.query("DELETE FROM students WHERE name = 'sakthi'",  (err, result, fields)=> {
      if (err) throw err;
      console.log(result);
    });
  });



