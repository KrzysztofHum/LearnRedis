import expressAsyncHandler from "express-async-handler";
import { personRepository } from "../models/personModel.js";

export const creatingPerson = expressAsyncHandler(async (req, res) => {
  const person = personRepository.createEntity(req.body);
  const newPerson = await personRepository.createAndSave(person);
  res.status(200).json({ newPerson });
});

export const gettingPerson = expressAsyncHandler(async (req, res) => {
  const person = await personRepository.fetch(req.params.id);
  res.status(200).json({ person });
});
