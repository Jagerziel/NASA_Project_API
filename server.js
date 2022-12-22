//Imports
import db from "./db/connection.js";
import express from "express";
import routes from "./routes/index.js";
import dotenv from 'dotenv'
dotenv.config()

//variables
const app = express();
// const PORT = process.env.MONGO_PORT || process.env.LOCAL_PORT;
const PORT = process.env.LOCAL_PORT;


//Uses
app.use(express.json());
app.use("/api", routes);

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
