//Imports
import mongoose from 'mongoose'
//Configure
let mongooseConnectionConfig = { useNewUrlParser: true, useUnifiedTopology: true}
mongoose.set('strictQuery', true)

//Connect
mongoose.connect('mongodb://localhost:27017/lists', mongooseConnectionConfig)

mongoose.connection.on('connected', ()=> console.log("Connected to database"))
mongoose.connection.on('disconnected', ()=> console.log("Disconnected from database"))
mongoose.connection.on('error', error=> console.error("Database error", error))

//Export
export default mongoose.connection

