import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getAllReviewsController } from '../controllers/review.js';

const router = Router();

router.get('/', ctrlWrapper(getAllReviewsController));

export default router;
