const express = require('express');
const app = express();
const port = 8080;

// app.use((req, res, next) => {
//     console.log("hi, I am a middleware");
//     // res.send("Bye");
//     next()
// })

// app.use((req, res, next) => {
//     req.responseTime = new Date(Date.now()).toString();
//     console.log(req.method, req.path, req.hostname);
//     next();
// })

let checkToken = ("/api", (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }
    res.send("ACCESS DENIED!");
})

app.get('/api', checkToken, (req, res) => {
    res.send('Data!');
})

app.get('/', checkToken, (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});