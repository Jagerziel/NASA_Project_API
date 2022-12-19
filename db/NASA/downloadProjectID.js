//Importing
import fetch from "node-fetch";
import fs from 'fs';
import express from "express";
import dotenv from 'dotenv'
dotenv.config()

//Fetching and writing data from API
fetch(`${process.env.API_URL1}${process.env.API_KEY}`)
.then(response => response.json() )
.then(data => {
    data = data.projects.slice(0, 100)
    console.log(data)
    fs.writeFileSync('./db/NASA/data-ProjectID.json', JSON.stringify(data))
})



