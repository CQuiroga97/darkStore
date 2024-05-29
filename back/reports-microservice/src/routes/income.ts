import { Router } from 'express';
import { IncomeController } from '../controllers/income.controller';

const incomeRouter = Router();
const BASE_PATH = '/report/income';
const controller = new IncomeController();

incomeRouter.get(`${BASE_PATH}`, controller.GetReport);

export { incomeRouter };
