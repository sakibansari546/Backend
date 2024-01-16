const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log(`Listening to port : ${port}`);
});

let posts = [
    {
        id: uuidv4(),
        username: "Sakib",
        content: "This is sakib post!",
    },
    {
        id: uuidv4(),
        username: "Ansari",
        content: "This is Ansari post",
    },
]


app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

// ================ //
// Impletement Post //
// ================ //
// create Route

// POST : /posts  to add a new post

// 2 routes
// - Serve the form  GET: /posts/new
// - Add the new post  POST: /posts


app.get("/posts/new", (req, res) => {
    res.render("new.ejs", { posts });
});
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    posts.push({ id, username, content });
    res.redirect("/posts");
});



// ========================= //
// Impletement GET/posts/:id //
// ========================= //
// show Route
// GET: /post/:id  to getone post(using id)


app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((post) => id == post.id);
    console.log(post);
    res.render("show.ejs", { post })
})



// ================== //
// Create id for Post //
// ================== //
// UUID Package
// Universally unique identifire


// ========================== //
// Implement: PATCH/posts/:id //
// ========================== //
// Update Route

// app.patch('/posts/:id', (req, res) => {
//     let { id } = req.params;
//     console.log(id);
//     res.send("Patch woking")
// })
