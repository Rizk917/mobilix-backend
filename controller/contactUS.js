const express = require("express");

const contactModels = require("../model/contactUS");

const getcontactus = async (req, res) => {
  try {
    const getcontact = await contactModels.find();
    res.status(200).json(getcontact);
  } catch (err) {
    res.json({ message: err });
  }
};

const postcontactus = async (req, res) => {
  if (!req.body.fullName || !req.body.Message || !req.body.mail) {
    res.status(400).json({ message: "Error" });
  } else {
    const contactpost = await contactModels.create({
      fullName: req.body.fullName,
      mail: req.body.mail,
      Message: req.body.Message,
    });
    return res.status(200).json(contactpost);
  }
};
const contUs = async (req, res) => {
  const cusdel = await contactModels.findById(req.params.id);

  // if (cusdel.user.toString() !== user.id) {
  //   res.status(401);
  //   throw new Error("User not found");
  // }

  if (!cusdel) {
    return res.send({ status: 404, error: true, message: `Error` });
  } else {
    await cusdel.remove();
    return res.status(200).json({ id: req.params.id });
  }
};

module.exports = {
  getcontactus,
  postcontactus,
  contUs,
};
