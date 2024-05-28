import { Router } from 'express';
import { postgresConfig } from '../config/postgres';
import { CategoryRepository } from '../repositories/category.repository';
import { CategoryService } from '../services/category.service';
import { CategoryProductController } from '../controllers/category-product.controller';

const categoryRouter = Router();
const BASE_PATH = '/category';
const categoryRepository = new CategoryRepository(postgresConfig);
const categoryService = new CategoryService(categoryRepository);
const controller = new CategoryProductController(categoryService);

categoryRouter.get(`${BASE_PATH}`, controller.Get);

export { categoryRouter };
