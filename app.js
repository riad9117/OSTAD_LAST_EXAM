import express from "express";
import cors from "cors";

import blogRouter from "./routes/blog.route.js";

const app = express();

//Default Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/v1", blogRouter);

//Route error
app.use("*", (req, res, next) => {
  res.status(404).send({
    message: "Route does not found",
  });
});

// Server error
app.use("*", (err, req, res, next) => {
  res.status(500).send({
    message: "Server broken",
  });
});

export default app;
