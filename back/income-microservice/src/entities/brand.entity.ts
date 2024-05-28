import { Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';
import { Income } from './income.entity';

@Entity({ name: 'marcas' })
export class Brand {
    @PrimaryGeneratedColumn({ name: 'id_marca' })
    id: number;

    //relationships
    @OneToMany(() => Product, (product) => product.brand)
    @JoinColumn({ name: 'marca_id' })
    products: Product[];

    @OneToMany(() => Income, (income) => income.brand)
    @JoinColumn({ name: 'marca_id' })
    incomes: Income[];
}
