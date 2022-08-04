import expressAsyncHandler from "express-async-handler";
// import expressAsyncHandler from "express-async-handler";
import { createCar } from "../redis.js";

const setCar = expressAsyncHandler(async (req, res) => {
  const id = await createCar(req.body);
  res.status(200).json({ id });
});

export default setCar;
