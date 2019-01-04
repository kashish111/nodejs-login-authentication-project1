var mysql= require('mysql');
var keys= require('./config/keys');
module.exports= function(){

var conn= mysql.createConnection({
  host: keys.host,
  database: keys.database,
  user: keys.user,
  password: keys.password
});
conn.connect(function(error){
  if(error) throw error;
  console.log("connected");

});
return conn;
}
