const dotenv=require("dotenv")
dotenv.config();
const mongoose = require("mongoose");
const connection = require("./config/db.js");
const express = require("express");
const app = express();
mongoose.set("strictQuery", true);

connection();

const conn = mongoose.connection;
app.use(express.json());
const port = process.env.PORT || 5000;
app.listen(port, console.log(`Listening on port ${port}...`));