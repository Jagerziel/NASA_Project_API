//imports
import data from '../db/NASA/data-ProjectData.json' assert { type: 'json' }


const projects = () => {
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

export default projects()