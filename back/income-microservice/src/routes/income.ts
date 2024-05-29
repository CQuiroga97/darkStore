import { Router } from 'express';
import { postgresConfig } from '../config/postgres';
import { IncomeRepository } from '../repositories/income.repository';
import { IncomeService } from '../services/income.service';
import { IncomeController } from '../controllers/income.controller';
import { IncomeDetailRepository } from '../repositories/income-detail.repository';
import { BrandRepository } from '../repositories/brand.repository';
import { BrandService } from '../services/brand.service';

const incomeRouter = Router();
const BASE_PATH = '/income';
const repository = new IncomeRepository(postgresConfig);
const brandRepository = new BrandRepository(postgresConfig);
const details = new IncomeDetailRepository(postgresConfig);
const service = new IncomeService(repository, details);
const brandService = new BrandService(brandRepository);
const controller = new IncomeController(service, brandService);

incomeRouter.post(`${BASE_PATH}`, controller.Create);
incomeRouter.get(`${BASE_PATH}`, controller.Get);
incomeRouter.put(`${BASE_PATH}/:id`, controller.Update);

export { incomeRouter };
