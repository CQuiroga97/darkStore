import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { Brand } from './brand.entity';

@Entity({ name: 'despachos' })
export class Dispatch {
    @PrimaryGeneratedColumn({ name: 'id_despacho' })
    id: number;

    @Column({ name: 'fecha_despacho' })
    dispatchDate: Date;

    @Column({ name: 'codigo_despacho' })
    dispatchCode: string;

    @Column({ name: 'marca_id' })
    brandId: number;

    @Column({ name: 'transportadora' })
    carrier: string;

    @Column({ name: 'numero_guia' })
    guideNumber: string;

    @Column({ name: 'cantidad_productos' })
    quantityProducts: number;

    @Column({ name: 'cantidad_embalaje' })
    quantityPackaging: number;

    @Column({ name: 'usuario_interno_id', nullable: true })
    internalUserId: number;

    @Column({ name: 'estado' })
    status: string;

    @ManyToOne(() => Brand, (brand: Brand) => brand.dispatches)
    @JoinColumn({ name: 'marca_id' })
    brand: Brand;
}
