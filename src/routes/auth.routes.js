const express = require("express");
const router = express.Router();

const controllers = require("../controllers/auth.controller");

// [POST] /login
router.post('/login',controllers.login);
// [POST] /register
router.post('/register',controllers.register);

// [GET] /users
router.get('/users',controllers.users);

module.exports = router;