import { Router } from "express";
import {verifyToken, isAdmin, isModerator} from "../middlewares/index"
const router = Router()

import * as productsCtrl from '../controllers/product.controller'

router.post('/',verifyToken, isModerator, productsCtrl.createProduct)
router.get('/',productsCtrl.getProducts)
router.get('/:productId', productsCtrl.getProductById)
router.put('/:productId',verifyToken, isAdmin, productsCtrl.updateProductById)
router.delete('/:productId',verifyToken, isAdmin, productsCtrl.deleteProductById)

export default router