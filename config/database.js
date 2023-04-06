const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'sql12.freemysqlhosting.net',
    user: 'sql12610785',
    password: 'kuKNmpksu5',
    database: 'sql12610785',
    port: 3306
})


// // Creating database
// connection.query('create database employeedb', (err, res) => {
//     if(err) throw err;
//     console.log('Database has been created')
// })


// Connecting to Database
connection.connect((err) => {
    if(err) throw err;
    console.log('Database successfully connected')
})

// // Create table within the database
// connection.query('create table user(id int primary key auto_increment, name char(50), address char(50), contact int)', (err) => {
//     if(err) throw err;
//     console.log('Table has been created within the database')
// })

module.exports = {
    connection
}