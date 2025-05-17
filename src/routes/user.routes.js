const express = require("express");
const router = express.Router();
const token = require("../middlewares/verifyToken.middlewares");
const controller = require("../controllers/user.controller");

// [GET]
router.get('/user',token.verify,controller.userCurrent);
router.post('/updateUser',controller.updateUser);


module.exports = router;