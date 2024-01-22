// const { faker } = require('@faker-js/faker');
// const mysql = require('mysql2');

// let getRandomUser = () => {
//     return [
//         faker.string.uuid(),
//         faker.internet.userName(),
//         faker.internet.email(),
//         faker.internet.password(),
//     ];
// }

// // console.log(createRandomUser());

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'first_app',
//     password: "SAKIB@123"
// });

// let q = "INSERT INTO user VALUES ?"
// let data = [];

// for (let i = 0; i <= 100; i++) {
//     data.push(getRandomUser())
// }
// console.log(data.length);

// try {
//     connection.query(q, [data], (err, results) => {
//         console.log(results);
//     });
// } catch (error) {
//     console.log(error);
// }

// connection.end();


// =============================== //
// Performe CRUD Operation with DB //
// =============================== //

const express = require('express')
const app = express()
let port = 8080;
const path = require('path');
const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const methodOverride = require("method-override");

app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
}

// console.log(createRandomUser());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'first_app',
    password: "SAKIB@123"
});


app.listen(port, () => {
    console.log(`Listening on ${port}`);
})


// ================= //
// First Route GET / //
// ================= //
// Fetch & Show total number of users on our app

app.get('/', (req, res) => {
    let q = `SELECT COUNT(*) FROM user`;

    try {
        connection.query(q, (err, results) => {
            if (err) throw err;
            let count = results[0]['COUNT(*)'];
            res.render("home.ejs", { count })

        });
    } catch (error) {
        console.log(error);
        res.set('ome Error With DB')
    }

})


// ====================== //
// Second Route GET /user //
// ====================== //
// Fetch & Show t(uerId,username,email) off all users

app.get('/user', (req, res) => {
    let q = `SELECT * FROM user`;

    try {
        connection.query(q, (err, results) => {
            if (err) throw err;
            // console.log(results);
            res.render("showUsers.ejs", { results })
        });
    } catch (error) {
        console.log(error);
        res.set('ome Error With DB')
    }

})




// ============================== //
// Third Route GET /user/:id/edit //
// ============================== //
// To get form to edit the username, based on id
//  This form will require a password

app.get('/user/:id/edit', (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}' `
    try {
        connection.query(q, (err, results) => {
            if (err) throw err;
            let result = results[0]
            res.render("edit.ejs", { result })
        });
    } catch (error) {
        console.log(error);
        res.set('ome Error With DB')
    }
});

// PATCH / user /: id  To edit username, if correct password was entered in form

app.patch('/user/:id', (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    let { password: fromPass, name: newUser } = req.body;
    try {
        connection.query(q, (err, results) => {
            if (err) throw err;
            let result = results[0];
            if (fromPass != result.password) {
                res.send("Worng Pass");
            }
            else {
                let q2 = `UPDATE user SET username='${newUser}' WHERE id='${id}'`;
                connection.query(q2, (err, results) => {
                    if (err) throw err;
                    res.redirect('/user');
                })
            }
        });
    } catch (error) {
        console.log(error);
        res.set('ome Error With DB');
    }
})



// ============================= //
// Forth Route GET /user/:id/new //
// ============================= //
// Create form to add a new user to the DataBases

app.get('/user/new', (req, res) => {
    res.render("new.ejs")
});

app.post('/user', (req, res) => {
    let val = req.body;
    let q = `INSERT INTO user (id,username,email,password) VALUES ('${faker.string.uuid()}',' ${val.name}','${val.email}','${val.password}')`
    try {
        connection.query(q, (err, results) => {
            if (err) throw err;
            res.redirect('/user');
        });
    } catch (error) {
        console.log(error);
        res.set('ome Error With DB')
    }
});




// ========================= //
// Fifth Route GET /user/:id //
// ========================= //
app.get('/user/:id/delete', (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}' `
    try {
        connection.query(q, (err, results) => {
            if (err) throw err;
            let result = results[0]
            res.render("delete.ejs", { result })
        });
    } catch (error) {
        console.log(error);
        res.set('ome Error With DB')
    }
});

app.delete('/user', (req, res) => {
    let q = `SELECT * FROM user WHERE id='${id}'`;
    let { password: fromPass, email: formEmail } = req.body;
    try {
        connection.query(q, (err, results) => {
            if (err) throw err;
            let result = results[0];
            if ((result.password == fromPass) && (result.email == formEmail)) {
                let q2 = `DELETE FROM user WHERE email='${user.email}' AND password='${user.password}'`;
                connection.query(q2, (err, results) => {
                    if (err) throw err;
                    // res.redirect('/user');
                    console.log(results);
                    req.send(results)
                })
            }
            else {
                console.log(results);
                res.send("Worng data")
            }
        });
    } catch (error) {
        console.log(error);
        res.set('ome Error With DB');
    }
})