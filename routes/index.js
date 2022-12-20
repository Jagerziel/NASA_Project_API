//Imports
import { Router } from "express";
import projectRoutes from "./projects.js";


//TESTING
import data from '../db/NASA/data-ProjectData.json' assert { type: "json" }
console.log(data.length)

//Variable for instance of Express
const router = Router();

//Setup API Root
router.get("/", (req, res) => {
  //TEST CODE
  res.setHeader('Content-type','text/html')
  res.write("<h1>API ROOT: Project Directory</h1>");

  for (let i = 0; i < data.length; i++) {
    res.write(`<p><a href='/api/projects/${data[i].projectId}'>${i + 1}) ${data[i].title} (ID: ${data[i].projectId})</a></p>`)
  }
  res.end()
  //FINAL CODE
  // res.send("API Root");
});

//Setup Router Link to ProjectRoutes
router.use("/projects", projectRoutes);

//Export 
export default router;
