const mysql = require("mysql");

// const connection = mysql.createConnection({
//    host: "localhost",
//    port: 3306,
//    user: "root",
//    password: "",
//    database: "burgers_db"
// });

const connectionConfig = process.env.JAWSDB_URL ? process.env.JAWSDB_URL : {
   host: "ryvdxs57afyjk41z.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
   port: 3306,
   user: "l37uf6rbn95yydgh",
   password: "za70xg6svgs6drn2",
   database: "wediu08j3ts8dc43"
};

const connection = mysql.createConnection(connectionConfig);

connection.connect(err => {
   if (err) {
      console.error(`Error connecting: ${err.stack}`);
      return;
   };
   console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;