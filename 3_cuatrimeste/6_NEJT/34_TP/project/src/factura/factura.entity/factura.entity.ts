import { Cliente } from "src/cliente/entities/cliente.entity";
import { Producto } from "src/producto/producto.entity/producto.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('E01_FACTURA')
export class Factura {

@PrimaryGeneratedColumn({name:'nro_factura'})
id: number;

@Column()
fecha:Date;
@Column()
total_sin_iva:number;
@Column()
iva:number;
@Column()
total_con_iva:number;

/*
@Column()
nro_cliente:number;
*/

@ManyToOne(() => Cliente, cliente => cliente.facturas)
@JoinColumn({name:'nro_cliente'})
cliente:Cliente;

@ManyToMany(()=> Producto,producto => producto.facturas,{nullable:true})
@JoinTable({
    name:'E01_DETALLE_FACTURA',
    joinColumn:{ name: 'nro_factura', referencedColumnName:'id' },
    inverseJoinColumn:{ name:'codigo_producto',referencedColumnName:'id' },
})
productos:Producto[];

}

