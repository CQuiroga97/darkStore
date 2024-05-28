import { Router } from 'express';
import { productRouter } from './product';
import { categoryRouter } from './category';

const router = Router();

router.use('', productRouter);
router.use('', categoryRouter);

export { router };
