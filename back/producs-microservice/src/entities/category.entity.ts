import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity('categoria_productos')
export class Category {
    @PrimaryGeneratedColumn({ name: 'id_categoria_producto' })
    id: number;

    @Column({ name: 'nombre' })
    name: string;

    @Column({ name: 'descripcion' })
    description: string;

    @CreateDateColumn({ name: 'fecha_creacion' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'fecha_actualizacion' })
    updatedAt: Date;
    //relationships
    @OneToMany(() => Product, (product) => product.category)
    products: Product[];
}
