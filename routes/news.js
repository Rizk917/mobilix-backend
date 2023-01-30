const express = require('express');

const router = express.Router();


// const {getnews,postnews,deletenews}=require("../controller/news");
  

const newsController = require("../controller/news");
const {protect}=require('../middleware/authMiddleware')
//cleanest way
router.route('/').get(protect,newsController.getnews).post(protect,newsController.postnews)
router.route('/:id').put(protect,newsController.updateNews).delete(protect,newsController.deletenews)



// clean way
// router.get('/', newsController.getnews);
// router.post('/', newsController.postnews);
// router.put('/:id',newsController.updateNews);
// router.delete('/:id', newsController.deletenews);


// dirty way
// router.get("/getnews",getnews)
// router.get("/getnews/:id",getnews)
// router.post("/postnews",postnews)
// router.delete("/deletenews/:id",deletenews)


module.exports=router;