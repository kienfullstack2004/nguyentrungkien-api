const express = require("express");
const router = express.Router();
const {verify} = require("../middlewares/verifyToken.middlewares");
const controllers = require("../controllers/admin.controller");


// [GET] 
router.get('/banners',controllers.banners);
// [POST]
router.post('/banner',controllers.createBanners);
router.post('/ytb',controllers.createYoutube);

router.post('/createCourses',verify,controllers.createCourses);

router.get('/courses',controllers.courses);

router.get('/ytbs',controllers.youtubes);
router.get('/courses/:id',controllers.getOnecourses);
// [DELETE]
router.delete('/courses/:id',controllers.deleteCourses);
router.delete('/banner/:id',controllers.deleteBanner);
module.exports = router;