import { DataSource, Repository } from 'typeorm';
import { Brand } from '../entities/brand.entity';

export class BrandRepository {
    private readonly repository: Repository<Brand>;
    constructor(dataSource: DataSource) {
        this.repository = dataSource.getRepository(Brand);
    }

    public findByID(id: number) {
        return this.repository.findOne({ where: { id } });
    }
}
