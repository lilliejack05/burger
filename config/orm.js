var connection = require("./connection");

// turn object to a string
function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
      if (Object.hasOwnProperty.call(ob, key)) {
       arr.push(key + "=" + ob[key]);
        }
    }
    return arr.toString();
}
    var orm = {
        // select from table
        selectAll: function(table, cb){
            var queryString = "SELECT * FROM ??";
            connection.query(queryString, [table], function(err, result) {
                if (err) {
                    throw err;
                }
                cb(result);    
            });
        }
    }
    
    // insert into table
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (?);"

            //console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        }
    )
    // update based on id.
    updateOne: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + condition + ";";

       // console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }  
            callback(result);
        
    });
    
module.exports = orm;
    };
