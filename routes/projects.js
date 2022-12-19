import { Router } from "express";
import * as controllers from "../controllers/projects.js";

const router = Router();

router.get("/", controllers.getProjects);
router.get("/:id", controllers.getProject);
router.post("/", controllers.createProject);
router.put("/:id", controllers.updateProject);
router.delete("/:id", controllers.deleteProject);

export default router;
