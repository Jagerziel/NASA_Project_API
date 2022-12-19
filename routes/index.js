import { Router } from "express";
import projectRoutes from "./projects.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("API Root");
});

router.use("/projects", projectRoutes);

export default router;
