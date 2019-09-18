import { Router } from 'express';
import TotpController from '../controllers/TotpController';

const router = Router();
const { send } = TotpController;

router.get('/totp', send);

export default router;
