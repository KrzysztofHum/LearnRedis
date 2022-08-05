import { Client } from "redis-om";
import "dotenv/config";

const url = process.env.REDIS_URL;
const client = await new Client().open(url);
export default client;


// export async function getPostStats(id) {
//   await connect();
//   const respository = client.fetchRepository(postStatsSchema);

//   const postStats = await respository.get(id);
//   return id;
// }

// export async function incrementPostViews(id) {
//   await connect();
//   const respository = client.fetchRepository(postStatsSchema);
//   const postStats = await respository.incr(id);
// }
