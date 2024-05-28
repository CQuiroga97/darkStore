import { Router } from 'express';
import { InventoryProductController } from '../controllers/inventory-product.controller';

const inventoryRouter = Router();
const BASE_PATH = '/report/inventory-product';
const controller = new InventoryProductController();

inventoryRouter.get(`${BASE_PATH}`, controller.GetReport);

export { inventoryRouter };
