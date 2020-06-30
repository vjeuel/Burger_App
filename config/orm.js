const connection = require("../config/connection.js");

// It might not be necessary
function printQuestions(num) {
   const qArr = [];

   for (let i = 0; i < num.length; i++) {
      qArr.push("?");
   }
   return qArr.toString();
};

function objToSql(ob) {
   const oArr = [];

   for (let key in ob) {
      const value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
         if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
         }
         oArr.push(key + "=" + value);
      }  
   }
   return oArr.toString();
}
 
const orm = {
   all: (tableInput, cb) => {
      connection.query(`SELECT * FROM ${tableInput};`, (err, result) => {
         if (err) {
            throw err;
         }
         cb(result);
      });
   },
   create: (table, cols, vals, cb) => {
      const queryString = `INSERT INTO ${table}`;

      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestions(vals.length);
      queryString += " )";

      console.log(queryString);
      
      connection.query(queryString, vals, (err, result) => {
         if (err) {
            throw err;
         }
         cb(result);
      });
   },
   update: (table, obColVals, condition, cb) => {
      const queryString = `UPDATE ${table}`;

      queryString += "SET ";
      queryString += objToSql(obColVals);
      queryString += "WHERE ";
      queryString += condition;

      console.log(queryString);

      connection.query(queryString, (err, result) => {
         if (err) throw err;
         cb(result);
      });
   },
   delete: (table, condition, cb) => {
      const queryString = `DELETE FROM ${table}`;

      queryString += " WHERE ";
      queryString += condition;

      connection.query(queryString, (err, result) => {
         if (err) throw err;
         cb(result);
      });
   }
};

module.exports = orm;