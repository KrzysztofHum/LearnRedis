import express from "express";
import {
  creatingPostStats,
  getPostStats,
  incPostStats,
  incPostViews,
} from "../controllers/viewStatsController.js";
const postStatsRouter = express.Router();

postStatsRouter.post("/:id", incPostViews);
postStatsRouter.post("/:id/:type", incPostStats);
postStatsRouter.get("/:id", getPostStats);

export default postStatsRouter;
