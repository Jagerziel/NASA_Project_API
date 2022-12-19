import data from '../db/NASA/data-ProjectData.json' assert { type: "json" }

// console.log(data[0].project)

const newArray = []
for (let i = 0; i < data.length; i++) {
    newArray.push(data[i].project)
}

console.log(newArray)

