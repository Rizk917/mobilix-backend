const express = require('express');

const router = express.Router();


const {getnews,postnews,deletenews}=require("../controller/news");
  

const newsController = require("../controller/news");

router.get('/', newsController.getnews);
router.post('/', newsController.postnews);
router.put('/:id',newsController.updateNews);
router.delete('/:id', newsController.deletenews);



// router.get("/getnews",getnews)
// router.get("/getnews/:id",getnews)
// router.post("/postnews",postnews)
// router.delete("/deletenews/:id",deletenews)


module.exports=router;