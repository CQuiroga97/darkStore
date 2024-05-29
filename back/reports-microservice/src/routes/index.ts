import { Router } from 'express';
import { incomeRouter } from './income';
import { inventoryRouter } from './inventory';

const router = Router();

router.use('', incomeRouter);
router.use('', inventoryRouter);

export { router };
