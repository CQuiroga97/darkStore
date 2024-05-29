import { Request, Response } from 'express';
import { ProductService } from '../services/product.service';
import { handleError } from '../utilities/error.utilities';
import {
    CreateProductMapper,
    UpdateProductMapper,
} from '../mappers/product.mapper';
import { validateOrReject } from 'class-validator';

export class ProductController {
    constructor(private readonly service: ProductService) {}

    Get = async ({}: Request, res: Response) => {
        try {
            const products = await this.service.getProducts();
            return res.status(200).json({ status: 'success', data: products });
        } catch (error) {
            return handleError(error, res);
        }
    };

    Create = async ({ body }: Request, res: Response) => {
        const product = CreateProductMapper(body);
        try {
            await validateOrReject(product);
            const newProduct = await this.service.createProduct(product);
            return res
                .status(201)
                .json({ status: 'success', data: newProduct });
        } catch (error) {
            return handleError(error, res);
        }
    };

    Update = async ({ body, params }: Request, res: Response) => {
        const product = UpdateProductMapper(body);
        try {
            const updatedProduct = await this.service.updateProduct({
                ...product,
                id: +params.id,
            });
            return res
                .status(200)
                .json({ status: 'success', data: updatedProduct });
        } catch (error) {
            return handleError(error, res);
        }
    };

    Delete = async ({ params }: Request, res: Response) => {
        try {
            await this.service.deleteProduct(+params.id);
            return res.status(200).json({ status: 'success' });
        } catch (error) {
            return handleError(error, res);
        }
    };
}
