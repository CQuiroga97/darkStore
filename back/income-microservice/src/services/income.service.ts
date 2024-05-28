import { Income } from '../entities/income.entity';
import { CreateIncome } from '../models/income.model';
import { IncomeDetailRepository } from '../repositories/income-detail.repository';
import { IncomeRepository } from '../repositories/income.repository';

export class IncomeService {
    constructor(
        private readonly repository: IncomeRepository,
        private readonly detailRepository: IncomeDetailRepository,
    ) {}

    async getIncomes() {
        return this.repository.getIncomes();
    }

    async createIncome(income: CreateIncome): Promise<Income> {
        const { incomeDetails, ...incomeData } = income;
        const newIncome = await this.repository.createIncome(incomeData);
        if (incomeDetails) {
            for (const detail of incomeDetails) {
                await this.detailRepository.createDeteail({
                    ...detail,
                    incomeId: newIncome.id,
                });
            }
        }
        return newIncome;
    }
    //
    // async updateIncome(
    //     income: Partial<CreateIncome> & { id: number },
    // ): Promise<Income> {
    //     if (
    //         income.brandId &&
    //         (await this.brandService.findByID(income.brandId)) === null
    //     )
    //         throw new Error(ERROR.RESOURCE_NOT_FOUND.replace('%s', 'Brand'));
    //     if (
    //         income.categoryId &&
    //         (await this.categoryService.findByID(income.categoryId)) === null
    //     )
    //         throw new Error(ERROR.RESOURCE_NOT_FOUND.replace('%s', 'Category'));
    //     return this.repository.updateIncome(income);
    // }
    //
}
