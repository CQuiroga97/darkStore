import { Router } from 'express';
import { incomeRouter } from './income';

const router = Router();

router.use('', incomeRouter);

export { router };
