import express from "express";

import homeRoute from "./home/index.js";
import chatRoute from "./chat/index.js";
import userRoute from "./user/index.js";

const v1ProtectedRouter = express.Router();
const v1UnProtectedRouter = express.Router();

const defaultRoutes = [
  {
    path: "/",
    route: homeRoute,
  },
  {
    path: "/chat",
    route: chatRoute,
  },
  {
    path: "/user",
    route: userRoute,
  },
];

defaultRoutes.forEach((route) => {
  v1UnProtectedRouter.use(route.path, route.route);
});
export { v1ProtectedRouter, v1UnProtectedRouter };
