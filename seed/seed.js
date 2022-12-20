//imports
import mongoose from 'mongoose'
import db from '../db/connection.js'
import data from '../db/NASA/data-ProjectData.json' assert { type: 'json' }
import Projects from '../models/ProjectModel.js'

//Create Function to Insert Data
const insertData = async () => {
    //Clear current database
    await db.dropDatabase();
    //Scrub data to remove null entries
    const scrubbedData = data.filter((notNull)=>{
        return notNull !== null
    })
    //Clean destinations object to only display two fields (lkuCodeID and Decription)
    for (let j = 0; j < scrubbedData.length; j++) {
        const exists = 'destinations' in scrubbedData[j]
        if (exists) {
            scrubbedData[j].destinations = scrubbedData[j].destinations.map(item => {
                item = {
                    lkuCodeId : item.lkuCodeId,
                    description : item.description
                }
                return item
            })
        } 
    }
    //Create database with current data
    await Projects.create(scrubbedData);
    //Close database connection
    await db.close();
};
//Call Function to Insert Data
insertData();
  
