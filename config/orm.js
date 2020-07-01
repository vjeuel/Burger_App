const connection = require("../config/connection.js");

// It might not be necessary
function printQuestions(num) {
   const arr = [];

   for (let i = 0; i < num; i++) {
      arr.push("?");  
   }
   return arr.toString();
};

function objToSql(ob) {
   const arr = [];

   
   
   for (let key in ob) {
      const value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
         if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = `' ${value} '`;
         }
         arr.push(`${key} = ${value}`);

         console.log(value, "- orm - Test 2");
         console.log(key, "- orm - Test 3");
         console.log(ob, "- orm - Test 4");
      }  
   }
   return arr.toString();
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
      let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestions(vals)})`;
      console.log(vals);
      
      console.log(queryString);
      
      connection.query(queryString, vals, (err, result) => {
         if (err) {
            throw err;
         }
         cb(result);
      });
   },
   update: (table, objColVals, condition, cb) => {
      let queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;
      console.log(objToSql(objColVals), "- orm - Test 1");
      
      console.log(queryString);

      connection.query(queryString, (err, result) => {
         if (err) {
            throw err;
         }
         cb(result);
      });
   },
   delete: (table, condition, cb) => {
      let queryString = `DELETE FROM ${table} WHERE ${condition}`;

      connection.query(queryString, (err, result) => {
         if (err) {
            throw err;
         }
         cb(result);
      });
   }
};

module.exports = orm;