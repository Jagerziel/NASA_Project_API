//Importing
import fetch from "node-fetch";
import fs from 'fs';
import express from "express";
import dotenv from 'dotenv'
dotenv.config()

//Fetching and writing data from API
fetch(`${process.env.API_URL1}${process.env.API_KEY}`)
//Convert Data to JavaScript
.then(response => response.json())
//Take only 100 Entries and Write File
.then(data => {
    data = data.projects.slice(0, 100)
    console.log(data)
    fs.writeFileSync('./db/NASA/data-ProjectID.json', JSON.stringify(data))
})

