const express = require('express');
const app = express();

let port = 8080;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(port, () => {
    console.log("Listening to port : ", port);
});

app.get("/register", (req, res) => {
    let { user, password } = req.query;
    res.send('GET response : ' + user);
})
app.post("/register", (req, res) => {
    console.log(req.body);
    let { name, password } = req.body;
    res.send(`Name : ${name} <br> Password : ${password}`);
})