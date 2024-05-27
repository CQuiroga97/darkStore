import { Router } from 'express';
import { postgresConfig } from '../config/postgres';
import { IncomeRepository } from '../repositories/income.repository';
import { IncomeService } from '../services/income.service';
import { IncomeController } from '../controllers/income.controller';
import { IncomeDetailRepository } from '../repositories/income-detail.repository';

const incomeRouter = Router();
const BASE_PATH = '/income';
const repository = new IncomeRepository(postgresConfig);
const details = new IncomeDetailRepository(postgresConfig);
const service = new IncomeService(repository, details);
const controller = new IncomeController(service);

incomeRouter.post(`${BASE_PATH}`, controller.Create);
incomeRouter.get(`${BASE_PATH}`, controller.Get);
// incomeRouter.put(`${BASE_PATH}/:id`, controller.Update);
// incomeRouter.delete(`${BASE_PATH}/:id`, controller.Delete);

export { incomeRouter };
