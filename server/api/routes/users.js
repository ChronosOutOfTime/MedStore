const express = require("express");
const router = express.Router();

const {
	user_sigunp,
	user_login,
	user_deleteById,
} = require('../controllers/user');

router.post("/signup", user_sigunp);
router.post("/login", user_login);
router.delete("/:userId", user_deleteById);

module.exports = router;