import { DataSource, Repository } from 'typeorm';
import { Income } from '../entities/income.entity';
import { CreateIncome } from '../models/income.model';

export class IncomeRepository {
    private repository: Repository<Income>;
    constructor(private dataSource: DataSource) {
        this.repository = this.dataSource.getRepository(Income);
    }

    async findByID(id: number): Promise<Income | null> {
        return this.repository.findOneBy({ id });
    }

    async getIncomes(): Promise<Income[]> {
        return this.repository.find();
    }

    async createIncome(product: CreateIncome): Promise<Income> {
        return this.repository.save(product);
    }

    // async updateIncome(
    //     product: Partial<CreateIncome> & { id: number },
    // ): Promise<Income> {
    //     if ((await this.findByID(product.id)) === null)
    //         throw new Error(ERROR.RESOURCE_NOT_FOUND.replace('%s', 'Income'));
    //     return this.repository.save(product);
    // }
}
