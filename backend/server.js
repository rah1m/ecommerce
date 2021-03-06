import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";

import productsRoutes from "./routes/productsRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

const app = express();

dotenv.config();

connectDB();

app.use(cors());

app.get("/", (req, res) => {
  res.send("API listening...");
});

app.use("/api/products", productsRoutes);

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
