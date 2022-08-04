import express from "express";
import expressAsyncHandler from "express-async-handler";
const router = express.Router();
import setCar from "../carController.js/carController.js";
const hello = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ name: "xDD" });
});
router.post("/", setCar);
router.get("/", hello);

export default router;
