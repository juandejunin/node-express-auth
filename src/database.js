import mongoose from "mongoose";
require('dotenv').config()
mongoose.set('strictQuery', true);

// import { MONGODB_URI } from "./config.js";
const BBDD_URI = process.env.BBDD_URI

mongoose.connect(BBDD_URI)
    .then(db => console.log('Db is connected'))
    .catch(error => console.log(error))
// try {
//   const db = await mongoose.connect(MONGODB_URI);
//   console.log("Database is connected to", db.connection.name);
// } catch (error) {
//   console.error(error.message);
// }
