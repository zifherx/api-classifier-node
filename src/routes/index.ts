import { Router } from "express";
import userRoutes from './user.routes'
import scanRoutes from './scan.routes'

const router = Router();

router.use('/user', userRoutes)
router.use('/scan', scanRoutes)

export default router;