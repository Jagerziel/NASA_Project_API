//Importing
import fetch from "node-fetch";
import fs from 'fs';
import express from "express";
import dotenv from 'dotenv'
dotenv.config()

//Fetching and writing data from API
for (let i = 0; i < 1; i++) {
    let id = '116443'
    fetch(`${process.env.API_URL20}${id}${process.env.API_URL21}${process.env.API_KEY}`)
    .then(response => response.json() )
    .then(data => {
        console.log(data)
        // fs.writeFileSync('./db/NASA/data-ProjectData.json', JSON.stringify(data))
    })
}

