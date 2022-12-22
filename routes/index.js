//Imports
import { Router } from "express";
import projectRoutes from "./projects.js";
import dotenv from 'dotenv'
dotenv.config()
//TOC
import seededProjects from '../controllers/toc.js'

//Variable for instance of Express
const router = Router();

//Variables for page contents and project count
const pageCountFunc = (data) => {
  if (data.length > 0) {
    return Math.floor((data.length - 1) / 10) + 1
  } 
  return 0
}
let pageCount = pageCountFunc(seededProjects)
let projCount = seededProjects.length

//Setup API Root
router.get("/", (req, res) => {
  res.setHeader('Content-type','text/html')
  res.write(`<h1><b>API Root: Port ${process.env.PORT}</b></h1>`);
  res.write(`<p><b>Convenient API Navigation Links:</b></p>`);
  res.write(`<p><a href='/api/Projects'>NASA Projects - Browse All</a></p>`)
  res.write(`<p><a href='/api/1'>NASA Projects - Browse Individual</a></p>`)
  res.end()
});

//Setup Router Link to ProjectRoutes
router.use("/projects", projectRoutes);

//Contents page
router.get("/:toc", (req, res) => {
  //Table of Contents Header
  res.setHeader('Content-type','text/html')
  if (req.params.toc > 0 && req.params.toc == pageCount) {
    //Page Header
    res.write(`<h1>Table of Contents: Page ${req.params.toc}</h1>`)
    let lastPageProjCount = projCount - (pageCount * 10 - 10)
    //Provide links to projects up to 10 max
    for (let i = 0; i < lastPageProjCount; i++) {
      res.write(`<p><a href='/api/projects/${seededProjects[i + req.params.toc * 10 - 10].projectId}'>${i+ req.params.toc * 10 - 9}) ${seededProjects[i + req.params.toc * 10 - 10].title} (ID: ${seededProjects[i + req.params.toc * 10 - 10].projectId})</a></p>`)
    }
    //Previous Page Link
    res.write(`<p><a href='/api/${parseInt(req.params.toc) - 1}'>Previous Page</a></p>`)
    //Return Home Link
    res.write(`<p><a href='/api/'>Return to API Root</a></p>`)

    res.end()
  } else if (req.params.toc > 0 && req.params.toc <= pageCount) {
    //Page Header
    res.write(`<h1>Table of Contents: Page ${req.params.toc}</h1>`)
    //Provide Links to Projects 10 at a Time
    for (let i = 0; i < 10; i++) {
      res.write(`<p><a href='/api/projects/${seededProjects[i + req.params.toc * 10 - 10].projectId}'>${i+ req.params.toc * 10 - 9}) ${seededProjects[i + req.params.toc * 10 - 10].title} (ID: ${seededProjects[i + req.params.toc * 10 - 10].projectId})</a></p>`)
    }
    //Next Page Link
    res.write(`<p><a href='/api/${parseInt(req.params.toc) + 1}'>Next Page</a></p>`)
    //Previous Page Link
    if (req.params.toc != 1) {
      res.write(`<p><a href='/api/${parseInt(req.params.toc) - 1}'>Previous Page</a></p>`)
    }
    //Return Home Link
    res.write(`<p><a href='/api/'>Return to API Root</a></p>`)

    res.end()
  } else {
    //Error Handling
    res.write(`<h1>Error: Please Navigate to a Valid Page</h1>`)
    //Return Home Link
    res.write(`<p><a href='/api/'>Return to API Root</a></p>`)

    res.end()
  }
})

//Export 
export default router;
