import { Router } from 'express';
import authRouter from './auth.js';
import storesRouter from './store.js';
import reviewsRouter from './review.js';
import productsRouter from './product.js';

const router = Router();

router.use('/user', authRouter);
router.use('/stores', storesRouter);
router.use('/customer-reviews', reviewsRouter);
router.use('/products', productsRouter);

export default router;
