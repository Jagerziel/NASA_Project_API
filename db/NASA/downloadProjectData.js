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

// Fetching and writing data from API
for (let i = 0; i < idArray.length; i++) {
    fetch(`${process.env.API_URL20}${idArray[i]}${process.env.API_URL21}${process.env.API_KEY}`)
    .then(response => response.json() )
    .then(data => {
        fs.appendFileSync('./db/NASA/data-ProjectData.json', JSON.stringify(data))
    })
}


