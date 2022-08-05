import { Entity, Schema } from "redis-om";
import client from "../redis.js";

class PostStats extends Entity {}
export const postStatsSchema = new Schema(
  PostStats,
  {
    id: { type: "number" },
    views: { type: "number" },
    uniqueViews: { type: "number" },
    phoneClicks: { type: "number" },
    favorites: { type: "number" },
  },
  {
    dataStructure: "JSON",
  }
);
export const postStatsRespository = client.fetchRepository(postStatsSchema);
