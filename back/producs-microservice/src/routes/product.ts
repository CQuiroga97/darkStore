import { Router } from 'express';
import { ProductController } from '../controllers/product.controller';
import { postgresConfig } from '../config/database/postgres';
import { ProductRepository } from '../repositories/product.repository';
import { ProductService } from '../services/product.service';
import { BrandRepository } from '../repositories/brand.repository';
import { BrandService } from '../services/brand.service';
import { CategoryRepository } from '../repositories/category.repository';
import { CategoryService } from '../services/category.service';

const productRouter = Router();
const BASE_PATH = '/product';
const categoryRepository = new CategoryRepository(postgresConfig);
const categoryService = new CategoryService(categoryRepository);
const brandRepository = new BrandRepository(postgresConfig);
const brandService = new BrandService(brandRepository);
const productRepository = new ProductRepository(postgresConfig);
const productService = new ProductService(
    productRepository,
    brandService,
    categoryService,
);
const controller = new ProductController(productService);

productRouter.post(`${BASE_PATH}`, controller.Create);
productRouter.get(`${BASE_PATH}`, controller.Get);
productRouter.put(`${BASE_PATH}/:id`, controller.Update);

export { productRouter };
