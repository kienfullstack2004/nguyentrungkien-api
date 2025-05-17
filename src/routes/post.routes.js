const express = require("express");
const router = express.Router();

const controller = require("../controllers/post.controller");
const { verify } = require("../middlewares/verifyToken.middlewares");

router.post("/new",verify,controller.createNews);
router.get("/news",controller.news);
router.get("/newsUser",verify,controller.newsUser);
router.post("/createYtbs",controller.createYtbs);
router.get("/ytbs",controller.ytbs);
router.post("/comment",verify,controller.comment);
router.get("/comments/:id",controller.comments);
router.get("/news/:id",controller.detailNews);
router.delete("/news/:id",controller.deleteNews);


module.exports = router;