import { Router } from 'express';
import { ScanController } from '../controller/scan.controller'

const router = Router();

router.post('/', ScanController.analyzeText)

export default router;