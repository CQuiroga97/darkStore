import { Router } from 'express';
import { postgresConfig } from '../config/postgres';
import { IncomeRepository } from '../repositories/income.repository';
import { IncomeService } from '../services/income.service';
import { IncomeController } from '../controllers/income.controller';

const incomeRouter = Router();
const BASE_PATH = '/report/income';
const incomeRepository = new IncomeRepository(postgresConfig);
const incomeService = new IncomeService(incomeRepository);
const controller = new IncomeController(incomeService);

incomeRouter.get(`${BASE_PATH}`, controller.GetReport);

export { incomeRouter };
