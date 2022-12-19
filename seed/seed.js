//imports
import mongoose from 'mongoose'
import db from '../db/connection.js'
import data from '../db/NASA/data-ProjectData.json' assert { type: 'json' }
import Projects from '../models/ProjectModel.js'

const insertData = async () => {
    //Clear current database
    await db.dropDatabase();
    //Create database with current data
    await Projects.create(data);
    //Close database connection
    await db.close();
};
//Call Function to Insert Data
insertData();
  
