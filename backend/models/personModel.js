import { Entity, Schema } from "redis-om";
import client from "../redis.js";

class Person extends Entity {}
export const personSchema = new Schema(
  Person,
  {
    firstName: { type: "string" },
    lastName: { type: "string" },
    age: { type: "number" },
    verified: { type: "boolean" },
  },
  {
    dataStructure: "JSON",
  }
);
export const personRepository = client.fetchRepository(personSchema);
