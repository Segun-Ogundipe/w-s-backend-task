import { Router } from 'express';
import TotpController from '../controllers/TotpController';
import TotpMiddleware from '../middlewares/TotpMiddleware';

const router = Router();
const { generateTotp, validateTotp } = TotpController;
const { validateBody } = TotpMiddleware;

router.get('/totp', generateTotp);
router.post('/totp', validateBody, validateTotp);

export default router;
