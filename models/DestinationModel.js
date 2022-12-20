import mongoose from "mongoose";

const Schema = mongoose.Schema;

const dataDest = new Schema({
    lkuCodeId: { type: Number },
    description: { type: String }
})

export default dataDest