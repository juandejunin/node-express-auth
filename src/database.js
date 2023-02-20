import mongoose from "mongoose";

// import { MONGODB_URI } from "./config.js";


mongoose.connect('mongodb+srv://estudiantes_back:contraseña123@cluster0.ol8cwwg.mongodb.net/?retryWrites=true&w=majority')
    .then(db => console.log('Db is connected'))
    .catch(error => console.log(error))








// try {
//   const db = await mongoose.connect(MONGODB_URI);
//   console.log("Database is connected to", db.connection.name);
// } catch (error) {
//   console.error(error.message);
// }
