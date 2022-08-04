import { Client, Entity, Schema } from "redis-om";
import "dotenv/config";
const client = new Client();
async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
}

class Car extends Entity {}
let schema = new Schema(
  Car,
  {
    make: { type: "string" },
    model: { type: "string" },
    image: { type: "string" },
    description: { type: "string" },
  },
  {
    dataStructure: "JSON",
  }
);

export async function createCar(data) {
  await connect();
  const repository = client.fetchRepository(schema);

  const car = repository.createEntity(data);
  const id = await repository.save(car);
  return id;
}

class postStats extends Entity {}
let postStatsSchema = new Schema(
  postStats,
  {
    make: { type: "string" },
    model: { type: "string" },
    image: { type: "string" },
    description: { type: "string" },
  },
  {
    dataStructure: "JSON",
  }
);

export async function getPostStats(id) {
  await connect();
  const respository = client.fetchRepository(postStatsSchema);

  const postStats = await respository.get(id);
  return id;
}

export async function incrementPostViews(id) {
  await connect();
  const respository = client.fetchRepository(postStatsSchema);
  const postStats = await respository.incr(id);
}

class Person extends Entity {}
const personSchema = new Schema(
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

export async function createPerson(data) {
  await connect();
  const personRepository = client.fetchRepository(personSchema);

  const person = personRepository.createEntity(data);

  const newPerson = await personRepository.createAndSave(person);
  return newPerson;
}

export async function getPerson(id) {
  await connect();
    const personRepository = client.fetchRepository(personSchema);

  const person = await personRepository.fetch(id);
  return person;
}
