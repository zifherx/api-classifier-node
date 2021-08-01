import { Router } from "express";
import userRoutes from './user.routes'
import scanRoutes from './scan.routes'

const router = Router();

router.use('/user', userRoutes)
router.use('/scan', scanRoutes)

router.get('/', (req,res) => {
    res.send('Bienvenido al API')
})

export default router;