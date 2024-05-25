import { Product } from '../entities/product.entity';
import { CreateProduct } from '../models/product.model';
import { ProductRepository } from '../repositories/product.repository';
import { ERROR } from '../utilities/messages.utilities';
import { BrandService } from './brand.service';
import { CategoryService } from './category.service';

export class ProductService {
    constructor(
        private readonly repository: ProductRepository,
        private readonly brandService: BrandService,
        private readonly categoryService: CategoryService,
    ) {}

    async getProducts() {
        return this.repository.getProducts();
    }

    async createProduct(product: CreateProduct) {
        if ((await this.brandService.findByID(product.brandId)) === null)
            throw new Error(ERROR.RESOURCE_NOT_FOUND.replace('%s', 'Brand'));
        if ((await this.categoryService.findByID(product.categoryId)) === null)
            throw new Error(ERROR.RESOURCE_NOT_FOUND.replace('%s', 'Category'));
        return this.repository.createProduct(product);
    }

    async updateProduct(
        product: Partial<CreateProduct> & { id: number },
    ): Promise<Product> {
        if (
            product.brandId &&
            (await this.brandService.findByID(product.brandId)) === null
        )
            throw new Error(ERROR.RESOURCE_NOT_FOUND.replace('%s', 'Brand'));
        if (
            product.categoryId &&
            (await this.categoryService.findByID(product.categoryId)) === null
        )
            throw new Error(ERROR.RESOURCE_NOT_FOUND.replace('%s', 'Category'));
        return this.repository.updateProduct(product);
    }
}
