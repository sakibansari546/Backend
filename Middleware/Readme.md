# Middleware
It is an intermediary

#### Request ----> Middleware -------> Response

#### in Express
Middleware in express are function that come into play after the server the request and before the response is sent to the clint.

### Comman Middleware function
- methodOverride
- bodyParse
- expres.static
- express.urlencoded
```
app.use(expres.urlencoded({extented : true}));
```
```
app.use(express.stsic(path.join(__dirname, "/public")))
```

### What do Middleware do?
Middleware function can perform the following task:

- Execute any code.
- Make change the request and the reso=ponse object.
- End the request - response cycle.
- Call the next Middleware funtion in the stack.

### Stntax Middleware

```
app.use(()=>{
    console.log("hi, I am a middleware");
})
```

```
app.use((req,res)=>{
    console.log("hi, I am a middleware");
    res.send("Bye")
})
```

### Creating Utility Middlware
```
app.use((req,res,next)=>{
    req.responseTime = new Date(Date.now()).toString();
    console.log(req.method, req.path, req.responseTime, req.hostname);
    next();
})
```

### API Token as query String
Lets create a middle-ware for an api thst check if the access tocken was passed in the query tring or not.