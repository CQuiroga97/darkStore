import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity({ name: 'detalles_despachos' })
export class DispatchDetail {
    @PrimaryGeneratedColumn({ name: 'id_detalle_despacho' })
    id: number;

    @Column({ name: 'producto_id' })
    productId: number;

    @Column({ name: 'total_cantidad_unidades' })
    totalQuantityUnits: number;

    @ManyToOne(() => Product, (product: Product) => product.dispatchDetails)
    @JoinColumn({ name: 'producto_id' })
    product: Product;
}
