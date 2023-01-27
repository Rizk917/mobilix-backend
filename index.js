const express = require('express')
const app= express()

const dotenv=require("dotenv")
dotenv.config();
const mongoose = require("mongoose");
const connection = require("./config/db");
const newsRoutes= require("./routes/news")
const UserRoutes= require("./routes/user")
mongoose.set("strictQuery", true);


mongoose.set("strictQuery", true);
app.use(express.json())
app.use(express.urlencoded({extended:false}));


connection();
const conn = mongoose.connection;
app.use(express.json());
app.use('/news', newsRoutes)
app.use('/user',UserRoutes)
const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port ${port}...`));

  