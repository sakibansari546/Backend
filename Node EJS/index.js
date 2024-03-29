const { create } = require("domain");
const express = require("express");
const app = express();
const path = require('path');

let port = 8080;

app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));

app.listen(port, () => {
    console.log(`listening on port : ${port}`);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))

// app.get("/", (request, respose) => {
//     // respose.send("root Path");
//     respose.render("home")
// });
// app.get("/home", (request, respose) => {
//     respose.send("root Path");
//     // respose.render("home");
// });


// =================== //
// Passing data to EJS //
// =================== //

app.get("/", (req, res) => {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    res.render("rollDice.ejs", { diceValue });
})

app.get("/rollDice", (req, res) => {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    res.render("rollDice.ejs", { diceValue })
});

app.get("/", (req, res) => {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    res.render("rollDice.ejs", { diceValue })
    res.send("Root path")
})


// ============= //
// Instagram EJS //
// ============= //
// create a basic template for insagram pages based on following Route.

app.get("/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    let data = instaData[username];
    console.log("Data : " + data);
    res.render("instagram.ejs", { data })


    console.log(username);
    if (data) {
        res.render("instagram.ejs", { data });
    } else {
        res.render("error.ejs")
    }
})
