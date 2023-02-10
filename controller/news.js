const express = require("express");
const multer = require("multer");
const newsModels = require("../model/news");
const UserModels = require("../model/user");
// image
const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: Storage,
  // limits:{
  //   fileSize:1024*1024*6
  // },
});
/////////////////////////////////////////////

//view all the news
const getnews = async (req, res) => {
  const index = await newsModels.findById(req.params.id);
  console.log(index);
  if (!index) {
    try {
      const news = await newsModels.find();
      console.log(news);
      res.status(200).json(news);
    } catch (err) {
      res.json({ message: err });
    }
  } else {
    //view one article
    try {
      const news = await newsModels.find(index);
      res.status(200).json(index);
    } catch (err) {
      res.json({ message: err });
    }
  }
};

//add new news article
const postnews = async (req, res) => {
  if (!req.body) {
    res.status(400).json({ message: "Error" });
  } else {
    const newsg = await newsModels.create({
      user: req.user.id,
      title: req.body.title,
      description: req.body.description,
      date: req.body && req.body.date ? req.body.date : null,
      article: req.body.article,
      author: req.body.author,
      image: req.file.path,
    });
    return res.status(200).json(newsg);
  }
};
/////////////////////////////////////////////////////////////////////////
//Update a news article
const updateNews = async (req, res) => {
  const articlee = await newsModels.findById(req.params.id);
  // const user = await UserModels.findById(req.user.id);
  // if (!user) {
  //   // check user
  //   res.status(401);
  //   throw new Error("User not found");
  // }
  // if (articlee.user.toString() !== user.id) {
  //   res.status(401); // make sure articles match user
  //   throw new Error("User not found");
  // }

  if (!articlee) {
    res.status(400);
    throw new Error("Article not found");
  }
  const updatedNews = await newsModels.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedNews);
};

/////////////////////////////////////////////////////////////

//this works alsooo
// const updateNews = async (req, res) => {
//   if (!req.body) {
//     res.status(400).json({ message: "Error" });
//   } else {
//     const updatedNews = await newsModels.findByIdAndUpdate(
//       { _id: req.params.id },
//       {
//         $set: {
//           title: req.body.title,
//           description: req.body.description,
//           date: req.body.date,
//           article: req.body.article,
//           author: req.body.author,
//         },
//       },
//       { new: true }
//     );
//     if (!updatedNews) {
//       return res
//         .status(404)
//         .json({ message: "Error: News not found with id " + req.params.id });
//     }
//     return res.status(200).json(updatedNews);
//   }
// };

//delete a news
const deletenews = async (req, res) => {
  const newsdel = await newsModels.findById(req.params.id);
  // const user = await UserModels.findById(req.user.id);
  // check user
  // if (!user) {
  //   res.status(401);
  //   throw new Error("User not found");
  // } // make sure articles match user
  // if (newsdel.user.toString() !== user.id) {
  //   res.status(401);
  //   throw new Error("User not found");
  // }

  if (!newsdel) {
    return res.send({ status: 404, error: true, message: `Error` });
  } else {
    await newsdel.remove();
    return res.status(200).json({ id: req.params.id });
  }
};

module.exports = {
  getnews,
  postnews,
  deletenews,
  updateNews,
  upload,
};
