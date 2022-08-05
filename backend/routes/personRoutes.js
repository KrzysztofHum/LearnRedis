import express from "express";
import {
  creatingPerson,
  gettingPerson,
} from "../controllers/personController.js";
const personRouter = express.Router();

personRouter.post("/", creatingPerson);
personRouter.get("/:id", gettingPerson);

export default personRouter;
