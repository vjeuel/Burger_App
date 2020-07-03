const mysql = require("mysql");

// const connection = mysql.createConnection({
//    host: "localhost",
//    port: 3306,
//    user: "root",
//    password: "",
//    database: "burgers_db"
// });

const connection = process.env.JAWSDB_URL ? process.env.JAWSDB_URL : {
   host: "localhost",
   port: 3306,
   user: "root",
   password: "",
   database: "burgers_db"
};

connection.connect(err => {
   if (err) {
      console.error(`Error connecting: ${err.stack}`);
      return;
   };
   console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;