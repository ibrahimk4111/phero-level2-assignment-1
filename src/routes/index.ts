import {Router} from 'express';
import { orderRouters } from '../modules/orders/order.routers';
import { productRouters } from '../modules/products/product.routers';

const router = Router();

router.use("/api/products", productRouters)
router.use("/api/orders", orderRouters)

export const allRouters = router