import { Router } from "express";
import {createUser} from '../controllers/user.controllers'
import {verifyToken, isAdmin} from '../middlewares/authJwt'
import { checkExistingRole } from "../middlewares";
const router = Router()


router.post('/',verifyToken, isAdmin, checkExistingRole, createUser )

export default router
