//Importing
import fetch from "node-fetch";
import fsPromises from fs;

//Fetching and writing data from API
fetch('https://api.nasa.gov/planetary/apod?api_key=hoJeeFuUEBHXgjFnSmRIWeDiki69flV3VedoY7nY')
.then(response => response.json())
.then(data => fsPromises.writeFile("./data.json", JSON.stringify(data)))


