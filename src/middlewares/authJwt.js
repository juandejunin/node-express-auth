import jwt from "jsonwebtoken"
import User from "../models/User"
require('dotenv').config()

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY


export const verifyToken = async (req,res,next) => {
try {
    let token = req.headers["x-access-token"]
    console.log(token)
    // si la cabecera no contiene token retornar un status 403 y un mensaje de error
    if(!token) return res.status(403).json({message: "No token provided"})
    //extraer el id del token enviado por el usuario
    const decoded = jwt.verify(token, JWT_SECRET_KEY)
    console.log(decoded)
    //comprobar si ese id existe en nuestra base de datos
    const user = await User.findById(decoded.id, {passwor: 0})
    //si el usuario no existe retornar status 404 y un mensaje de error
    if(!user) return res.status(404).json({message: "no user found"})
    next()
    
} catch (error) {
   return res.status(401).json({message: "Unauthorized"}) 
}
    
}