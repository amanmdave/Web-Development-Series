const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

const server = express();
server.use(bodyParser.json());

// MIDDLEWARES
server.use(cors());
// server.use("/posts", () => {
//     console.log("MIDDLEWARE RUNNING");
// });

//ROUTERS
const postsRoute = require("./routes/posts");
server.use("/posts", postsRoute);

// ROUTES
server.get("/", (req, res) => {
    res.send("SERVER IS UP AND RUNNING");
});

// server.get("/posts", (req, res) => {
//     res.send("We are on /posts");
// });

// CONNECT TO DB
mongoose.connect(
    process.env.CONNECT_DB,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("CONNECTED TO MONGODB DATABASE");
    }
);

server.listen(8080);
