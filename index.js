const express = require("express");
const app = express();
const multer = require("multer");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const connection = require("./config/db");
const newsRoutes = require("./routes/news");
const UserRoutes = require("./routes/user");
const phonesRoute = require("./routes/phones");
const contactusRoutes = require("./routes/contactUS");
// const path =require('path')
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images");
//   },

// filename:(req,file,cb)=>{
//    console.log(file)
//    cb(null,Date.now()+path.extname(file.originalname))
// },
// });
// const upload =multer({storage:storage})
mongoose.set("strictQuery", true);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
connection();
const conn = mongoose.connection;
app.use(express.json());
app.use("/news",newsRoutes);
app.use("/user",UserRoutes);
app.use("/contactus", contactusRoutes);
app.use("/phones", phonesRoute);
app.use('/uploads',express.static('uploads'))
const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port ${port}...`));
