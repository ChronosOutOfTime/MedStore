const express = require("express");
const router = express.Router();
const multer = require('multer');
const checkAuth = require('../middlewares/check-auth');
const {
	medicines_get,
	medicines_getById,
	medicines_patchById,
	medicines_deleteById,
	medicines_post,
} = require('../controllers/medicines');


const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./uploads/");
	},
	filename: (req, file, cb) => {
		cb(null, new Date().toISOString() + file.originalName);
	},
});

const fileFilter = (req, file, cb) => {
	if (file.mimeType === "image/jpeg" || file.mimeType === "image/png") {
		// accept a file
		cb(null, true);
	} else {
		// reject a file
		cb(null, false);
	}

};

const upload = multer({
	storage,
	limits: {fileSize: 1024 * 1024 * 5},
	fileFilter,
});

router.get("/", medicines_get);
router.get("/:medicineId", medicines_getById);
router.patch("/:medicineId", checkAuth, medicines_patchById);
router.delete("/:medicineId", checkAuth, medicines_deleteById);
router.post("/", checkAuth, upload.single("medicineImage"), medicines_post);

module.exports = router;