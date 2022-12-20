import data from '../db/NASA/data-ProjectData.json' assert { type: "json" }
import dataTest from '../db/NASA/data-ProjectDataTEST.json' assert { type: "json" }
// console.log(data)

// // const newArray = []
// // for (let i = 0; i < data.length; i++) {
//     let planetArray = []
//     for (let j = 0; j < data[i].destinations.length; i++) {
//         planetArray.push(data[i].destinations[j].description)
//     }
//     data[i].destinations = planetArray
// //     newArray.push(data[i])
// // }

// console.log(newArray)



// console.log(data[1])
// console.log(data[12].destinations.length)


const scrubbedData = dataTest.filter((data)=>{
    return data !== null
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


// console.log(dataTest.length)
// console.log(scrubbedData.length)
console.log(scrubbedData[27])

// console.log(dataTest[55])
// console.log(dataTest[56])
