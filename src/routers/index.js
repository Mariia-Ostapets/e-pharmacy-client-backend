import { Router } from 'express';
import authRouter from './auth.js';
import storesRouter from './store.js';

const router = Router();

router.use('/user', authRouter);
router.use('/stores', storesRouter);

export default router;
