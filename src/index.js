import {} from 'dotenv/config';
import {} from 'dotenv/config';
import express from "express";
import loaders from "./loaders/index.js";
import config from "./config/index.js";
import http from "http";
import { MySocket } from "./loaders/socket.io.js";

async function startServer() {
  const app = express();
  await loaders.init({ expressApp: app });
  let server = http.createServer(app);
  server.listen(config.env.port, () => {
    new MySocket(server);
    console.log(`Server Started ~ :${config.env.port}`);
  });

  process.on("uncaughtException", (err) => {
    console.log("uncaughtException! Shutting Down the Server...");
    console.log(err);
    process.exit(1);
  });

  process.on("unhandledRejection", (err) => {
    console.log("unhandledRejection! Shutting Down the Server...");
    console.log(err);
    server.close(() => {
      process.exit(1);
    });
  });
}

startServer();
