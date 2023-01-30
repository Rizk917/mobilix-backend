const express = require("express");

const contactModels = require("../model/contactUS");

const getcontactus = async (req, res) => {
  try {
    const getcontact = await contactModels.find({});
    res.status(200).json(getcontact);
  } catch (err) {
    res.json({ message: err });
  }
};

const postcontactus = async (req, res) => {
  if (!req.body.fullName || !req.body.text || !req.body.mail) {
    res.status(400).json({ message: "Error" });
  } else {
    const contactpost = await contactModels.create({
      fullName: req.body.name,
      text: req.body.text,
      mail: req.body.mail,
    });
    return res.status(200).json(contactpost);
  }
};

module.exports = {
  getcontactus,
  postcontactus,
};
