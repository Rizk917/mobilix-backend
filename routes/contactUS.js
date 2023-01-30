const express = require('express');

const router = express.Router();



const contactusController = require("../controller/contactUS");
//cleanest way
router.route('/').get(contactusController.getcontactus).post(contactusController.postcontactus)


module.exports=router;