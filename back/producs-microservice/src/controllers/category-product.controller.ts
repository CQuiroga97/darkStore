import { Request, Response } from 'express';
import { handleError } from '../utilities/error.utilities';
import { CategoryService } from '../services/category.service';

export class CategoryProductController {
    constructor(private readonly service: CategoryService) {}

    Get = async ({}: Request, res: Response) => {
        try {
            const categories = await this.service.getCategories();
            return res
                .status(200)
                .json({ status: 'success', data: categories });
        } catch (error) {
            return handleError(error, res);
        }
    };
}
