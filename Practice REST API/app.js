const express = require("express");
const app = express();

const port = 8080;

app.listen(port, () => {
    console.log(`Listening to post : ${port}`);
})

app.get("/", (req, res) => {
    res.send("Root Path")
})