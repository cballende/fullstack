import { Producto } from "src/producto/producto.entity/producto.entity";
import { Factura } from "src/factura/factura.entity/factura.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('E01_DETALLE_FACTURA')
export class FacturaProducto{
  
  @Column()
  nro_factura:number;
  
  @Column()
  codigo_producto:number;

  @Column()
  nro_item:number;

  @Column()
  cantidad: number;
}