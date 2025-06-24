import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('E01_CLIENTE')
export class Cliente {

    @PrimaryGeneratedColumn({name:'nro_cliente'})
    id: number;
        
    @Column({length: 45})
    nombre: string;
  
    @Column({length: 45})
    apellido: string;

    @Column({length: 45})
    direccion: string;

    @Column({type:'smallint'})
    activo: number;
}
