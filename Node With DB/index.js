// ================== //
// Generate Fake Data // 
// ================== //
const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

let getRandomUser = () => {
    return {
        id: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
}

// console.log(getRandomUser());


// ============== //
// MySQL2 Package //
// ============== //
// to connect Node with MySQl

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'first_app',
    password: "SAKIB@123"
});
try {
    connection.query("SHOW TABLES", (err, results) => {
        console.log(results);
    })

} catch (err) {
    console.log(err);
}

connection.end()

// ================== //
// using SQL from CLI //
// ================== //
// /usr/local/mysql/bin/mysql -u root -p

