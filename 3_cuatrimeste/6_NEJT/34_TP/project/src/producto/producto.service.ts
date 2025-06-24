import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Producto } from './producto.entity/producto.entity';

import { ProductoDto } from './dto/producto.dto/producto.dto';
import { CreateProductoDto } from './dto/producto.dto/create-producto.dto';
import { UpdateProductoDto } from './dto/producto.dto/update-producto.dto';

@Injectable()
export class ProductoService {
    constructor(
        @InjectRepository(Producto)
        private productoRepository:Repository<Producto>,
    ){}

    async findAll():Promise<Producto[]>{
        return this.productoRepository.find();
    }

    async findOne(id:number):Promise<Producto | null>{
        return this.productoRepository.findOne({ where: {id:id}});
    }

    async create(dto: ProductoDto): Promise<Producto> {
        const existente = await this.productoRepository.findOne({
            where: { nombre: dto.nombre }
        });
        if (existente) {
            throw new Error("producto ya existe");
        }
        const producto = this.productoRepository.create({
            ...dto,
            id: dto.id // 🔁 Mapeo manual
        });
        return this.productoRepository.save(producto);
    }

    async update(idProducto:number,dto: UpdateProductoDto): Promise<Producto> {

        const existe = await this.productoRepository.findOne({
            where: { id: idProducto }
        });

        if (!existe) throw new Error("No existe producto");

        const producto = this.productoRepository.create({
            ...dto,
            id: idProducto, // 🔁 Mapeo manual
        });
        return this.productoRepository.save(producto);
    }

    async remove(id:number){
        try{
        await this.productoRepository.delete(id);
        }catch(e){
            return "no se puede eliminar el producto";
        }
    }

}
