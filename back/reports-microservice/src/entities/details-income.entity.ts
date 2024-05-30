import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { Product } from './product.entity';
import { Income } from './income.entity';

@Entity({ name: 'detalles_ingresos' })
export class IncomeDetail {
    @PrimaryGeneratedColumn({ name: 'id_detalle_ingreso' })
    id: number;

    @Column({ name: 'ingreso_id' })
    incomeId: number;

    @Column({ name: 'producto_id' })
    productId: number;

    @Column({ name: 'cantidad' })
    quantity: number;

    @ManyToOne(() => Product, (product: Product) => product.incomeDetails, { nullable: true })
    @JoinColumn({ name: 'producto_id' })
    product?: Product;

    @ManyToOne(() => Income, (income: Income) => income.incomeDetails, { nullable: true })
    @JoinColumn({ name: 'ingreso_id' })
    income?: Income;
}
