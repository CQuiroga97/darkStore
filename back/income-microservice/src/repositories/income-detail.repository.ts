import { DataSource, Repository } from 'typeorm';
import { CreateIncomeDetail } from '../models/income.model';
import { IncomeDetail } from '../entities/details-income.entity';

export class IncomeDetailRepository {
    private repository: Repository<IncomeDetail>;
    constructor(private dataSource: DataSource) {
        this.repository = this.dataSource.getRepository(IncomeDetail);
    }

    async createDeteail(detail: CreateIncomeDetail): Promise<IncomeDetail> {
        return this.repository.save(detail);
    }

    // async updateIncome(
    //     product: Partial<CreateIncome> & { id: number },
    // ): Promise<Income> {
    //     if ((await this.findByID(product.id)) === null)
    //         throw new Error(ERROR.RESOURCE_NOT_FOUND.replace('%s', 'Income'));
    //     return this.repository.save(product);
    // }
}
