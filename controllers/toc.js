//imports
import data from '../db/NASA/data-ProjectData.json' assert { type: 'json' }

//Create database duplicate for use on Table of Contents pages
const projects = () => {
    //Remove Null entries
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
    return scrubbedData
}
//Export
export default projects()