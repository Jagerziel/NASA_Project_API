//Importing
import fetch from "node-fetch";
import fs from 'fs';
import express from "express";
import dotenv from 'dotenv'
dotenv.config()
import dataProjId from './data-ProjectID.json' assert {type: 'json'}

//Iterate through ID to pull only subset of NASA Projects in second Fetch
const idArray = []
for (let i = 0; i < dataProjId.length; i++) {
    idArray.push(dataProjId[i].projectId)
}

//Fetches all data to run async
async function fetchAll() {
    //promise all to ensure all objects are added to the array
    const results = await Promise.all(
        //maps each object at specified url into an array
        idArray.map((projID) => fetch(`${process.env.API_URL20}${projID}${process.env.API_URL21}${process.env.API_KEY}`).then((r) => r.json()))
    )
    //removes unnecessary level of data
    const resultsUpOneLvl = []
    for (let i = 0; i < results.length; i++) {      
        resultsUpOneLvl.push(results[i].project)
    }
    //writes the file with all urls included within array
    fs.writeFile('./db/NASA/data-ProjectData.json', JSON.stringify(resultsUpOneLvl), (err) => {
        //error handling
        if (err) {
            console.log('Failed to write data')
            return
        }
        //notifies upon successful write
        console.log('Updated data file successfully')
    })
  }
//calls function
fetchAll()