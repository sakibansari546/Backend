const express = require("express");
const app = express();
// console.log(app);

let port = 8080;

app.listen(port, () => {
    console.log("Hello Sakib Bro How are you!", port);
});


// app.use((req, res) => {
//     console.log(req);
//     console.log("Hello Sakib Bro How are you!");
//     // res.send("Hello Sakib Bro How are you!")
//     // res.send({
//     //     name: "sakib",
//     //     age: 17
//     // });
//     let htmlCode = `<h1>Hey!</h1>`;
//     res.send(htmlCode);
// });

app.get("/", (req, res) => {
    res.send("root path");
})

app.get("/home", (req, res) => {
    res.send("home path");
})
app.get("/about", (req, res) => {
    res.send("about path");
});

app.get("*", (req, res) => {
    console.log("This path not exist");
})

app.post("/", (req, res) => {
    console.log("this is post req.");
})
