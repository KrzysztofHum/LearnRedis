import { postStatsRespository } from "../models/viewStatsModel.js";
import expressAsyncHandler from "express-async-handler";

export const creatingPostStats = expressAsyncHandler(async (req, res) => {
  await postStatsRespository.createIndex();
  // const postStats = postStatsRespository.createEntity(req.body);
  const newStats = await postStatsRespository.createAndSave(req.body);
  res.status(200).json({ newStats });
});

export const getPostStats = expressAsyncHandler(async (req, res) => {
  const postStats = await postStatsRespository
    .search()
    .where("id")
    .equal(req.params.id)
    .return.all();
  res.status(200).json({ postStats });
});

export const incPostViews = expressAsyncHandler(async (req, res) => {
  const postStats = await postStatsRespository
    .search()
    .where("id")
    .equal(req.params.id)
    .return.all();
  if (postStats.length <= 0) {
    await postStatsRespository.createIndex();
    const newStats = await postStatsRespository.createAndSave({
      id: req.body.id,
      views: 1,
      uniqueViews: 0,
      phoneClicks: 0,
      favorites: 0,
    });
    res.status(200).json({ newStats });
  } else {
    postStats[0].views++;
    await postStatsRespository.save(postStats[0]);
    res.status(200).json({ postStats });
  }
});
export const incPostStats = expressAsyncHandler(async (req, res) => {
  if (req.params.type == "views") {
    const postStats = await postStatsRespository
      .search()
      .where("id")
      .equal(req.params.id)
      .return.all();
    if (postStats.length <= 0) {
      await postStatsRespository.createIndex();
      const newStats = await postStatsRespository.createAndSave({
        id: req.body.id,
        views: 1,
        uniqueViews: 0,
        phoneClicks: 0,
        favorites: 0,
      });
      res.status(200).json({ newStats });
    } else {
      postStats[0].views++;
      await postStatsRespository.save(postStats[0]);
      res.status(200).json({ postStats });
    }
  } else if (req.params.type === "uniqueViews") {
    const postStats = await postStatsRespository
      .search()
      .where("id")
      .equal(req.params.id)
      .return.all();
    if (postStats.length <= 0) {
      await postStatsRespository.createIndex();
      const newStats = await postStatsRespository.createAndSave({
        id: req.body.id,
        views: 0,
        uniqueViews: 1,
        phoneClicks: 0,
        favorites: 0,
      });
      res.status(200).json({ newStats });
    } else {
      postStats[0].uniqueViews++;
      await postStatsRespository.save(postStats[0]);
      res.status(200).json({ postStats });
    }
  } else if (req.params.type === "phoneClicks") {
    const postStats = await postStatsRespository
      .search()
      .where("id")
      .equal(req.params.id)
      .return.all();
    if (postStats.length <= 0) {
      await postStatsRespository.createIndex();
      const newStats = await postStatsRespository.createAndSave({
        id: req.body.id,
        views: 0,
        uniqueViews: 0,
        phoneClicks: 1,
        favorites: 0,
      });
      res.status(200).json({ newStats });
    } else {
      postStats[0].phoneClicks++;
      await postStatsRespository.save(postStats[0]);
      res.status(200).json({ postStats });
    }
  } else if (req.params.type === "favorites") {
    const postStats = await postStatsRespository
      .search()
      .where("id")
      .equal(req.params.id)
      .return.all();
    if (postStats.length <= 0) {
      await postStatsRespository.createIndex();
      const newStats = await postStatsRespository.createAndSave({
        id: req.body.id,
        views: 0,
        uniqueViews: 0,
        phoneClicks: 0,
        favorites: 1,
      });
      res.status(200).json({ newStats });
    } else {
      postStats[0].favorites++;
      await postStatsRespository.save(postStats[0]);
      res.status(200).json({ postStats });
    }
  }
});
