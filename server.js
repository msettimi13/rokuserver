const express = require('express');
const app = express();

const port = process.env.PORT || 5050;

//this catches every route request - everytime u change your location bar, this function reacts to it and intercepts the route request
app.use((req, res, next) => {
    console.log('incoming request');
    console.log(process.env.PORT);
    // console.log(process.env.NICKNAME);

    // NEXT is the original route request ie /api/users
    next(); // => send the user to the route they requested
})

// use the API route file to handle API routes (/api/users, /api/:user/:id, etc)
app.use("/api", require("./routes/api"));

//run the app at PORT
app.listen(port, () => {
    console.log(`server is running on ${port}`);
})