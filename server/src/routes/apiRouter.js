import express from "express";
import apiController from "../controllers/apiController";
const router = express.Router();

router.route("/test").post(apiController.test);

module.exports = router;
