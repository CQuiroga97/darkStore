import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { IncomeDetail } from './details-income.entity';
import { Brand } from './brand.entity';
@Entity({ name: 'ingresos' })
export class Income {
    @PrimaryGeneratedColumn({ name: 'id_ingreso' })
    id: number;

    @Column({ name: 'fecha_ingreso', type: 'date' })
    incomeDate: string;

    @Column({ name: 'codigo_ingreso' })
    incomeCode: string;

    @Column({ name: 'marca_id' })
    brandId: number;

    @Column({ name: 'usuario_marca_id', nullable: true })
    userBrandId: number;

    @Column({ name: 'usuario_interno_id', nullable: true })
    internalUserId: number;

    @Column({ name: 'estado' })
    status: string;

    @OneToMany(
        () => IncomeDetail,
        (incomeDetail: IncomeDetail) => incomeDetail.income,
    )
    incomeDetails: IncomeDetail[];

    @ManyToOne(() => Brand, (brand: Brand) => brand.incomes)
    @JoinColumn({ name: 'marca_id' })
    brand: Brand;
}
