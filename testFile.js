import { assert } from 'console'
import data from './db/NASA/data-ProjectData.json' assert {type: 'json'}

const dataChk = []

for (let i = 0; i < 1; i++) {
    dataChk.push(data.project.projectID)
}

console.log(dataChk)