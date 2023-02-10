const express = require("express");

const router = express.Router();

// const {getnews,postnews,deletenews}=require("../controller/news");

// const newsController = require("../controller/news");
const { } = require("../middleware/authMiddleware");
const {
  getnews,
  postnews,
  deletenews,
  updateNews,
  upload,
} = require("../controller/news");

//cleanest way
router.route("/").get(getnews).post(upload.single("image"),postnews);
router.route("/:id").put(upload.single("image"), updateNews).delete( deletenews);

// clean way
// router.get('/', getnews);
// router.post('/', newsController.postnews);
// router.put('/:id',newsController.updateNews);
// router.delete('/:id', newsController.deletenews);

// dirty way
// router.get("/getnews",getnews)
// router.get("/getnews/:id",getnews)
// router.post("/postnews",postnews)
// router.delete("/deletenews/:id",deletenews)

module.exports = router;
