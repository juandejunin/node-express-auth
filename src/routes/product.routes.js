import { Router } from "express";
import {verifyToken} from "../middlewares/index"
const router = Router()

import * as productsCtrl from '../controllers/product.controller'

router.post('/',verifyToken ,productsCtrl.createProduct)
router.get('/', verifyToken,productsCtrl.getProducts)
router.get('/:productId',verifyToken, productsCtrl.getProductById)
router.put('/:productId',verifyToken, productsCtrl.updateProductById)
router.delete('/:productId',verifyToken, productsCtrl.deleteProductById)

export default router