//Importing
import { Router } from "express";
import * as controllers from "../controllers/projects.js";

//Variables
const router = Router();

//Setup Requests
router.get("/", controllers.getProjects);
router.get("/:id", controllers.getProject);
router.post("/", controllers.createProject);
router.put("/:id", controllers.updateProject);
router.delete("/:id", controllers.deleteProject);

//Export
export default router;
