import { Router } from 'express';
import authRouter from './auth.js';
import storesRouter from './store.js';
import reviewsRouter from './review.js';

const router = Router();

router.use('/user', authRouter);
router.use('/stores', storesRouter);
router.use('/customer-reviews', reviewsRouter);

export default router;
