import { DataSource, Repository } from 'typeorm';
import { Category } from '../entities/category.entity';

export class CategoryRepository {
    private readonly repository: Repository<Category>;

    constructor(dataSource: DataSource) {
        this.repository = dataSource.getRepository(Category);
    }

    async findByID(id: number) {
        return this.repository.findOne({ where: { id } });
    }
}
