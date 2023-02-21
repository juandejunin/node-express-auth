import jwt from "jsonwebtoken"
import User from "../models/User"
import Role from "../models/Role"

require('dotenv').config()

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY


export const verifyToken = async (req, res, next) => {
    try {
        let token = req.headers["x-access-token"]
        console.log(token)
        // si la cabecera no contiene token retornar un status 403 y un mensaje de error
        if (!token) return res.status(403).json({ message: "No token provided" })
        //extraer el id del token enviado por el usuario
        const decoded = jwt.verify(token, JWT_SECRET_KEY)
        req.userId = decoded.id;
        console.log(decoded)
        //comprobar si ese id existe en nuestra base de datos
        const user = await User.findById(req.userId, { passwor: 0 })
        //si el usuario no existe retornar status 404 y un mensaje de error
        if (!user) return res.status(404).json({ message: "no user found" })
        next()

    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" })
    }

}

// export const verifyToken = async (req, res, next) => {
//     let token = req.headers["x-access-token"];
//     console.log(token)
//     if (!token) return res.status(403).json({ message: "No token provided" });
  
//     try {
//       const decoded = jwt.verify(token, SECRET);
//       req.userId = decoded.id;
//       console.log(decoded)
  
//       const user = await User.findById(req.userId, { password: 0 });
//       console.log(user)
//       if (!user) return res.status(404).json({ message: "No user found" });
  
//       next();
//     } catch (error) {
//       return res.status(401).json({ message: "Unauthorized!" });
//     }
//   };

  export const isModerator = async (req, res, next) => {
    try {
      const user = await User.findById(req.userId);
      
      const roles = await Role.find({ _id: { $in: user.roles } });
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "moderator") {
          next();
          return;
        }
      }
      return res.status(403).json({ message: "Require Moderator Role!" });
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  };

  export const isAdmin = async (req, res, next) => {
    try {
      const user = await User.findById(req.userId);
      const roles = await Role.find({ _id: { $in: user.roles } });
  
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }
  
      return res.status(403).json({ message: "Require Admin Role!" });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: error });
    }
  };
// export const isModerator = async (req,res,next)=>{
//     let token = req.headers["x-access-token"]
//     const decoded = jwt.verify(token, JWT_SECRET_KEY);
//     const user = await User.findById(decoded.id)
//     const roles = await Role.find({_id: {$in: user.roles}})
//     console.log(roles)

//     next()
    
// }

// export const isAdmin= async (req,res,next)=>{}