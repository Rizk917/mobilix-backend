const express = require('express');

const router = express.Router();
// const phonesController=require("../controller/phones.js");
const {
 postphones,
 getphones,
 updatephones,
 deletephones,
upload
  } = require("../controller/phones");


router.route('/').get(getphones).post(upload.single("image"),postphones)
router.route('/:id').get(getphones).put(updatephones, upload.single("image")).delete(deletephones)



module.exports=router;