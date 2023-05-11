import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import authenticate from "../middleware/authenticate.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { v1ProtectedRouter, v1UnProtectedRouter } from "../routes/index.js";

export default async function expressLoader({ app }) {
  app.use(cors());
  app.use(helmet());

  app.use(express.json());
  app.use(bodyParser.json());

  // set the view engine to ejs
  app.set("views", path.join(__dirname, "../views"));
  app.set("view engine", "ejs");

  // let the app use the assets folder publicist
  app.use(express.static(path.join(__dirname, "../assets")));
  app.use("/api", authenticate);

  app.use("/api", v1ProtectedRouter);
  app.use("/v1", v1UnProtectedRouter);
}
