import expressAsyncHandler from "express-async-handler";
// import expressAsyncHandler from "express-async-handler";
import { createPerson, getPerson } from "../redis.js";

export const creatingPerson = expressAsyncHandler(async (req, res) => {
  const newPerson = await createPerson(req.body);
  res.status(200).json({ newPerson });
});

// export default creatingPerson;

export const gettingPerson = expressAsyncHandler(async (req, res) => {
  const person = await getPerson(req.params.id);
  res.status(200).json({ person });
});

// export default getPerson
