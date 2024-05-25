import { Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity({ name: 'marcas' })
export class Brand {
    @PrimaryGeneratedColumn({ name: 'id_marca' })
    id: number;

    //relationships
    @OneToMany(() => Product, (product) => product.brand)
    @JoinColumn({ name: 'marca_id' })
    products: Product[];
}
