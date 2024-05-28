import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity('categoria_productos')
export class Category {
    @PrimaryGeneratedColumn({ name: 'id_categoria_producto' })
    id: number;

    //relationships
    @OneToMany(() => Product, (product) => product.category)
    products: Product[];
}
