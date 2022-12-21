//Imports
import { Router } from "express";
import projectRoutes from "./projects.js";

//TESTING
import data from '../db/NASA/data-ProjectData.json' assert { type: "json" }
import projLength from '../seed/seed.js'

//Variable for instance of Express
const router = Router();

//Setup API Root
router.get("/", (req, res) => {
  //TEST CODE
  res.setHeader('Content-type','text/html')
  //FINAL CODE
  res.write("API Root");
  res.write(`<p><a href='/api/1'>NASA Projects TOC - Easy Navigation</a></p>`)
  res.end()
});

router.get("/:toc", (req, res) => {
  res.setHeader('Content-type','text/html')
  res.write(`<h1>Table of Contents: Page ${req.params.toc}</h1>`);
  if (req.params.toc == 1) {
    res.write('TESTING')
    res.end()
  } else {
    res.write('Error: Please Enter a Valid Page')
    res.end()
  }

// res.write("<h1>API ROOT: Project Directory</h1>");

// for (let i = 0; i < data.length; i++) {
//   res.write(`<p><a href='/api/projects/${data[i].projectId}'>${i + 1}) ${data[i].title} (ID: ${data[i].projectId})</a></p>`)
// }
// res.end()
})

console.log(projLength)
//Setup Router Link to ProjectRoutes
router.use("/projects", projectRoutes);


//Export 
export default router;
