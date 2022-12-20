//Imports
import { Router } from "express";
import projectRoutes from "./projects.js";

//Variable for instance of Express
const router = Router();

//Setup API Root
router.get("/", (req, res) => {
  res.send("API Root");
});

//Setup Router Link to ProjectRoutes
router.use("/projects", projectRoutes);

//Export 
export default router;
