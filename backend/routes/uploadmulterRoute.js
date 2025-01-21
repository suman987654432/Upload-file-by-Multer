const express = require("express");
const multer = require("multer");
const uploadController = require("../controllers/uploadController");

const route = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage });

route.post("/uploadfile", upload.single('photo'), uploadController.uploadFile);
route.get("/displaydata", uploadController.dataDisplay);

module.exports = route;
