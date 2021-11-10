const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password:"Qwerty_123",
    host:"localhost",
    port:5432,
    database:"bookstore"
});

module.exports = pool;
//module.exports = {
  //  query: (text, params) => pool.query(text, params)
//}