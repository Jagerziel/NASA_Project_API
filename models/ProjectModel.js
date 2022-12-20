//Import
import mongoose from "mongoose";

//Create Variables
const Schema = mongoose.Schema;

//Construct Schema
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

//Export Model
export default mongoose.model('Projects', dataNASA)