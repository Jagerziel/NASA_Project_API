//Imports
import db from "./db/connection.js";
import express from "express";
import routes from "./routes/index.js";
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

//variables
const app = express();
const PORT = process.env.PORT || process.env.LOCAL_PORT;
// const PORT = process.env.LOCAL_PORT;

//Uses
app.use(express.json());
app.use("/api", routes);
app.use(cors)

//db connection
db.on("connected", () => {
  console.clear();
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(
      `Express server is running in development on port: ${PORT}`
    );
  });
});
