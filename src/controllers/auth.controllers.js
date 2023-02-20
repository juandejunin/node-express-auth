import User from "../models/User"
import Role from "../models/Role"
import jwt from "jsonwebtoken";
require('dotenv').config()

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY



export const signUp = async (req, res) => {
    const { username, email, password, roles } = req.body;
    console.log(req.body)

    // Creating a new User Object
    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)

    });


    // checking for roles
    if (roles) {
        const foundRoles = await Role.find({ name: { $in: roles } });
        newUser.roles = foundRoles.map((role) => role._id);
    } else {
        const role = await Role.findOne({ name: "user" });
        newUser.roles = [role._id];
    }


    console.log(newUser)

    const savedUser = await newUser.save()
    console.log(savedUser)


    const token = jwt.sign({ id: savedUser._id }, JWT_SECRET_KEY, {
        expiresIn: 86400
    })


    res.json({ token })

}


export const signin = async (req, res) => {
    res.json('signin')
}