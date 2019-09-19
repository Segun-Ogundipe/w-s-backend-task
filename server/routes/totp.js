import { Router } from 'express';
import TotpController from '../controllers/TotpController';

const router = Router();
const { generateTotp, validateTotp } = TotpController;

router.get('/totp', generateTotp);
router.post('/totp', validateTotp);

export default router;
