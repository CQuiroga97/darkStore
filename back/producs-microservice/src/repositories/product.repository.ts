import { DataSource, Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { CreateProduct } from '../models/product.model';
import { ERROR } from '../utilities/messages.utilities';

export class ProductRepository {
    private repository: Repository<Product>;
    constructor(private dataSource: DataSource) {
        this.repository = this.dataSource.getRepository(Product);
    }

    async findByID(id: number): Promise<Product | null> {
        return this.repository.findOneBy({ id });
    }

    async getProducts(): Promise<Product[]> {
        return await this.repository.find();
    }

    async createProduct(product: CreateProduct): Promise<Product> {
        return await this.repository.save(product);
    }

    async updateProduct(
        product: Partial<CreateProduct> & { id: number },
    ): Promise<Product> {
        if ((await this.findByID(product.id)) === null)
            throw new Error(ERROR.RESOURCE_NOT_FOUND.replace('%s', 'Product'));
        return this.repository.save(product);
    }
}
