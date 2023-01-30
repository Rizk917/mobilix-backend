const express = require('express');

const router = express.Router();
const phonesController=require("../controller/phones.js");


router.route('/').get(phonesController.getphones).post(phonesController.postphones)
router.route('/:id').put(phonesController.updatephones).delete(phonesController.deletephones)



module.exports=router;