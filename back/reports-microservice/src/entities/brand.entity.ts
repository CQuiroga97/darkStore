import {
    Entity,
    JoinColumn,
    OneToMany,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';
import { Product } from './product.entity';
import { Income } from './income.entity';
import { Dispatch } from './dispatch.entity';

@Entity({ name: 'marcas' })
export class Brand {
    @PrimaryGeneratedColumn({ name: 'id_marca' })
    id: number;

    @Column({ name: 'nombre' })
    name: string;

    //relationships
    @OneToMany(() => Product, (product) => product.brand)
    @JoinColumn({ name: 'marca_id' })
    products: Product[];

    @OneToMany(() => Income, (income: Income) => income.brand)
    incomes: Income[];

    @OneToMany(() => Dispatch, (dispatch: Dispatch) => dispatch.brand)
    dispatches: Dispatch[];
}
