// const express = require("express");
// const dotenv = require("dotenv").config();
import express from "express";
import router from "./routes/carRoutes.js";
import "dotenv/config";
import personRouter from "./routes/personRoutes.js";
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/cars", router);
app.use("/api/person", personRouter);

app.listen(port, () => console.log(`Server started on port ${port}`));
