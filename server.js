//Imports
import db from "./db/connection.js";
import express from "express";
import routes from "./routes/index.js";
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api", routes);

db.on("connected", () => {
  console.clear();
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(
      `Express server is running in development on http://localhost:${PORT}`
    );
  });
});
