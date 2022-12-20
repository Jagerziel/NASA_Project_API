//imports
import mongoose from 'mongoose'
import db from '../db/connection.js'
import data from '../db/NASA/data-ProjectData.json' assert { type: 'json' }
import Projects from '../models/ProjectModel.js'

const insertData = async () => {
    //Clear current database
    await db.dropDatabase();
    const scrubbedData = data.filter((notNull)=>{
        return notNull !== null
    })
    
    for (let j = 0; j < scrubbedData.length; j++) {
        const exists = 'destinations' in scrubbedData[j]
        console.log(`Item ${j}: ${exists}`)
        if (exists) {
            console.log(`Item ${j} length: ${scrubbedData[j].destinations.length}`)
            scrubbedData[j].destinations = scrubbedData[j].destinations.map(item => {
                item = {
                    lkuCodeId : item.lkuCodeId,
                    description : item.description
                }
                return item
            })
        } 
    }
    console.log(data.length)
    console.log(scrubbedData.length)
    //Create database with current data
    await Projects.create(scrubbedData);
    //Close database connection
    await db.close();
};
//Call Function to Insert Data
insertData();
  
