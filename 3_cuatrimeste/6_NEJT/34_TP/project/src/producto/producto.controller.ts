import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, ValidationPipe } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { Producto } from './producto.entity/producto.entity';
import { ProductoDto } from './dto/producto.dto/producto.dto';
import { CreateProductoDto } from './dto/producto.dto/create-producto.dto';
import { UpdateProductoDto } from './dto/producto.dto/update-producto.dto';

@Controller('producto')
export class ProductoController {
    constructor(private readonly productoService:ProductoService){}

    @Get()
    async findAll():Promise<ProductoDto[]>{
        return this.productoService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id:number):Promise<ProductoDto | null> {
        return this.productoService.findOne(id);
    }
    
    @Post()
    async create(@Body(new ValidationPipe({transform:true})) dto: CreateProductoDto) {
        return this.productoService.create(dto);
    }

    @Put(':id')
    async update( @Param('id', ParseIntPipe) id:number ,
                  @Body(new ValidationPipe({transform:true})) dto: UpdateProductoDto) {
        return this.productoService.create(dto);
    }
    
    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number){

        return this.productoService.remove(id);
    }
}
