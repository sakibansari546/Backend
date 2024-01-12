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

// app.get("/home", (req, res) => {
//     res.send("home path");
// })
// app.get("/about", (req, res) => {
//     res.send("about path");
// });

// app.get("/Hello", (req, res) => {
//     res.send("Hello path");
// });
// app.get("*", (req, res) => {
//     res.send("This path is not exist");
// });
// app.post("/", (req, res) => {
//     res.send("You send a post req");
// });

// app.get("/:username/:id", (req, res) => {
//     let { username, id } = req.params;
//     res.send(`<h1 font="arial">Welcome to page of @${username}!</h1>`);
// });


app.get("/search", (request, respose) => {
    // console.log(request.query);
    let { q } = request.query;
    if (!q) {
        respose.send("<h1>404 not found </h1>")
    }
    respose.send(`Search result ${q}`)
})



