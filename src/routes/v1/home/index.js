import express from "express";
const router = express.Router();
import { getHome } from "./controller.js";

router.route("/").get(getHome);

export default router;
