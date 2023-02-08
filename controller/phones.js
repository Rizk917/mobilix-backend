const express = require("express");
const multer = require("multer");
const { dirname } = require("path");
const path = require("path");
const phonesModels = require("../model/phones");
// const UserModels=require("../model/user")
// image
const Storage= multer.diskStorage({
  destination:"uploads",
  filename:(req,file,cb)=> {
    cb(null,file.originalname)
  }
});
const upload=multer({
  storage:Storage,

});
/////////////////////////////////////////////

//view all the phones
const getphones = async (req, res) => {
  const index = await phonesModels.findById(req.params.id);
  if (!index) {
    try {
      const phones = await phonesModels.find();
      res.status(200).json(phones);
    } catch (err) {
      res.json({ message: err });
    }
  } else {
    //view one phone
    try {
      res.status(200).json(index);
    } catch (err) {
      res.json({ message: err });
    }
  }
};
// const xyz= require('../uploads')
//add new phones article
const postphones = async (req, res) => {
  console.log("42 ",req.file)
  if (!req.body) {
    res.status(400).json({ message: "Error" });
  } else {
    const phonesg = await phonesModels.create({
      //   user:req.user.id,
      phoneModel: req.body.phoneModel,
      display: req.body.display,
      memory: req.body.memory,
      body: req.body.body,
      camera: req.body.camera,
      vendor: req.body.vendor,
      prodDate: req.body.prodDate,
      image: req.file.path,
    });
    return res.status(200).json(phonesg);
  }
};
/////////////////////////////////////////////////////////////////////////
//Update a phones article
const updatephones = async (req, res) => {
  const articlee = await phonesModels.findById(req.params.id);

  //   const user=await UserModels.findById(req.user.id)
  //   if(!user){ // check user
  //     res.status(401)
  //     throw new Error('User not found')
  //   }
  // if(articlee.user.toString()!== user.id){
  //   res.status(401)// make sure articles match user
  //   throw new Error('User not found')
  // }

  if (!articlee) {
    res.status(400);
    throw new Error("Article not found");
  }
  const updatedphones = await phonesModels.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedphones);
};

/////////////////////////////////////////////////////////////

//this works alsooo
// const updatephones = async (req, res) => {
//   if (!req.body) {
//     res.status(400).json({ message: "Error" });
//   } else {
//     const updatedphones = await phonesModels.findByIdAndUpdate(
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
//     if (!updatedphones) {
//       return res
//         .status(404)
//         .json({ message: "Error: phones not found with id " + req.params.id });
//     }
//     return res.status(200).json(updatedphones);
//   }
// };

//delete a phones
const deletephones = async (req, res) => {
  const phonesdel = await phonesModels.findById(req.params.id);

  //   const user=await UserModels.findById(req.user.id)
  // check user
  //   if(!user){
  //     res.status(401)
  //     throw new Error('User not found')
  //   }// make sure articles match user
  // if(phonesdel.user.toString() !== user.id){
  //   res.status(401)
  //   throw new Error('User not found')
  // }

  if (!phonesdel) {
    return res.send({ status: 404, error: true, message: `Error` });
  } else {
    await phonesdel.remove();
    return res.status(200).json({ id: req.params.id });
  }
};

module.exports = {
  getphones,
  postphones,
  deletephones,
  updatephones,
  upload,
};
