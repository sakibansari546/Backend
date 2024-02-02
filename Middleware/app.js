// const express = require('express');
// const app = express();
// const port = 8080;

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

// let checkToken = ("/api", (req, res, next) => {
//     let { token } = req.query;
//     if (token === "giveaccess") {
//         next();
//     }
//     res.send("ACCESS DENIED!");
// })

// app.get('/api', checkToken, (req, res) => {
//     res.send('Data!');
// })

// app.get('/', checkToken, (req, res) => {
//     res.send('Hello World!');
// })

// app.listen(port, () => {
//     console.log(`App listening on port ${port}`)
// });




// ============== //
// Error Handling //
// ============== //

const express = require('express');
const app = express();
const port = 8080;
const ExpressError = require("./ExpressError");


app.get('/', (req, res) => {
    res.send("Hello world!")
})

let checkToken = ((req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }
    throw new ExpressError(401, "ACCESS DENIDE");
})

app.get('/api', checkToken, (req, res) => {
    res.send('Data!');
})

app.get('/err', (req, res) => {
    abd = BDA;
    res.send("error root")
})

app.get('/admin', (req, res) => {
    throw new ExpressError(403, "Access to admin is forbiden")
})

app.use((err, req, res, next) => {
    let { status = 500, massage } = err
    // next(err)
    // res.send(err)
    res.status(status).send(massage);
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});
