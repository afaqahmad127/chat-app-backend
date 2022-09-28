import express from "express";
const router = express.Router();
import { getChatMessages,sendMessage } from "./controller.js";

router.route("/").get(getChatMessages).post(sendMessage);

export default router;
