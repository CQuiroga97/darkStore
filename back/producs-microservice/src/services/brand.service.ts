import { BrandRepository } from '../repositories/brand.repository';

export class BrandService {
    private readonly repository: BrandRepository;
    constructor(repository: BrandRepository) {
        this.repository = repository;
    }

    async findByID(id: number) {
        return this.repository.findByID(id);
    }
}
