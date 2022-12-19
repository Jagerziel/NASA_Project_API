//Imports
import db from "./db/connection.js";
import express from "express";
import routes from "./routes/index.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api", routes);

db.on("connected", () => {
  console.clear();
  console.log(chalk.blue("Connected to MongoDB!"));
  app.listen(PORT, () => {
    console.log(
      `Express server is running in development on http://localhost:${PORT}`
    );
  });
});
