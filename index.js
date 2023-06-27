const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'bob',
    password: 'psswd123',
    database: 'schooldb'
});
connection.connect();

function viewStudents(){
    let sql = "SELECT id, name FROM students";
    connection.query(sql, function(err, rows, fields){
        if (err) throw err;
        console.log('Records avvailable: ' + rows.length);
        for(let i =0; i < rows.length; i++){
            console.log(rows[i].id + ' ' + rows[i].name);
        }

    });

}
viewStudents();
connection.end(); 