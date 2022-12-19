import Projects from '../models/ProjectModel.js'


export const getProjects = async (req, res) => {
    try {
      const projects = await Projects.find();
      res.json(projects);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };
  
  export const getProject = async (req, res) => {
    try {
      const { id } = req.params;
      const project = await Projects.findById(id);
  
      if (project) {
        return res.json(project);
      }
  
      res.status(404).json({ message: "Project not found" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };
  
  export const createProject = async (req, res) => {
    try {
      const project = new Projects(req.body);
      await project.save();
      res.status(201).json(project);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };
  
  export const updateProject = async (req, res) => {
    try {
      const { id } = req.params;
      const project = await Projects.findByIdAndUpdate(id, req.body);
      res.status(201).json(project);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };
  
  export const deleteProject = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Projects.findByIdAndDelete(id);
  
      if (deleted) {
        return res.status(200).send("Project removed from database");
      }
  
      throw new Error("Project not found");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };
  