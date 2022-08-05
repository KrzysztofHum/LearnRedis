import express from "express";
import "dotenv/config";
import personRouter from "./routes/personRoutes.js";
import postStatsRouter from "./routes/viewStatsRoutes.js";

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/person", personRouter);
app.use("/api/stats", postStatsRouter);

app.listen(port, () => console.log(`Server started on port ${port}`));
