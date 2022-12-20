import mongoose from "mongoose";
import Destination from './DestinationModel.js'

const Schema = mongoose.Schema;
const DestinationSchema = Destination

const dataNASA = new Schema({
    projectId: { type: Number },
    title: { type: String },
    benefits: { type: String },
    description: { type: String },
    destinations: [ { type: Object } ],
    startYear: { type: Number },
    startMonth: { type: Number },
    endYear: { type: Number },
    endMonth: { type: Number }
})

export default mongoose.model('Projects', dataNASA)