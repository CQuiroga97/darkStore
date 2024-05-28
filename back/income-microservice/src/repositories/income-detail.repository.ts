import { DataSource, Repository } from 'typeorm';
import { CreateIncomeDetail } from '../models/income.model';
import { IncomeDetail } from '../entities/details-income.entity';

export class IncomeDetailRepository {
    private repository: Repository<IncomeDetail>;
    constructor(private dataSource: DataSource) {
        this.repository = this.dataSource.getRepository(IncomeDetail);
    }

    async createDeteail(detail: CreateIncomeDetail): Promise<IncomeDetail> {
        console.log('detail---->', detail);
        return this.repository.save(detail);
    }
}
