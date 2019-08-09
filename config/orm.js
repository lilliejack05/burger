var connection = require("./connection");

// turn object to a string
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
     var value = ob[key];
     if (Object.hasOwnProperty.call(ob, key)) {
    } if (typeof value === "sting" && value.idexOf(" ") >=0) {

    }
    value = " " + value + " ";
    }
        arr.push(key + "=" + value);

       return arr.toString();
        }
    

    var orm = {
        // select from table
          All: function (table, cb){
            var queryString = "SELECT * FROM ??";
            connection.query(queryString, [table], function(err, result) {
                if (err) {
                    throw err;
                }
                cb(result);    
            });
        },
    //}
    
    // insert into table
         insertOne: function (table, cols, vals, cb) {
            
        var queryString = "INSERT INTO " +  table + "( " + cols.toString() + ") VALUES (?)";


        //Inserting a record: INSERT INTO [table] ([column], [column]) VALUES ('[value]', [value]');


        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        }
    )
         },
     //update based on id.
        updateOne: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + condition + ";";

       // console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }  
            cb(result);
        
    });
    
}   
          //closes ORM object 
 };
module.exports = orm;
