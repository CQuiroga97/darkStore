import { CategoryRepository } from '../repositories/category.repository';

export class CategoryService {
    private readonly repository: CategoryRepository;

    constructor(repository: CategoryRepository) {
        this.repository = repository;
    }

    async findByID(id: number) {
        return this.repository.findByID(id);
    }

    async getCategories() {
        return this.repository.getCategories();
    }
}
