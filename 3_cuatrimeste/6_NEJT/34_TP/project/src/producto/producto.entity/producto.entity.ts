import { Factura } from "src/factura/factura.entity/factura.entity";
import { Column, Entity, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('E01_PRODUCTO')
export class Producto {
@PrimaryColumn({ name: 'codigo_producto' })
idProducto: number;

@Column()
marca:string;
@Column()
nombre:string;
@Column()
descripcion:string;
@Column()
precio:number;
@Column()
stock:number;

@ManyToMany(()=> Factura,factura => factura.productos)
facturas:Factura[];
}
