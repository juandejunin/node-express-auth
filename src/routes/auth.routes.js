import { Router } from "express";
import {signin, signUp} from "../controllers/auth.controllers"
import {checkExistingUser, checkExistingRole} from "../middlewares/verifySignup"
const router = Router()

router.post('/signin', signin)
router.post('/signup',checkExistingUser,checkExistingRole, signUp)

export default router