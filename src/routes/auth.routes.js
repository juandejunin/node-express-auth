import { Router } from "express";
import {signin, signUp} from "../controllers/auth.controllers"
const router = Router()

router.post('/signin', signin)
router.post('/signup', signUp)

export default router