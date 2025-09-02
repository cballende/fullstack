import { Controller,
         Get, Post,Put,Delete,Body, Param,
         ParseIntPipe,ValidationPipe,
         HttpCode, HttpStatus } from '@nestjs/common';

import { FacturaService } from './factura.service';

import { FacturaDto } from './dto/factura.dto/factura.dto';
import { CreateFacturaDto }from './dto/factura.dto/create-factura.dto';
import { UpdateFacturaDto }from './dto/factura.dto/update-factura.dto';

import { Factura } from './factura.entity/factura.entity';
import { Producto } from 'src/producto/producto.entity/producto.entity';




@Controller('factura')
export class FacturaController {
    constructor(private readonly facturaService:FacturaService) {}
    
    @Get()
    async findAll():Promise<Factura[]>{
        return this.facturaService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<Factura | null> {
    return this.facturaService.findOne(id);
    }
    @Get('producto/:idProducto')
    async getFacturasByProducto(@Param('idProducto', ParseIntPipe) idProducto: number):Promise<Factura[]>{
        return this.facturaService.findFacturasByProducto(idProducto);
    }
    @Get('producto/facturados/mas-de-tres')
    async getProductosFacturadosMasDe3():Promise<Producto[]>{
        return this.facturaService.findProductosFacturadosMasDe3Veces()
    }
    @Get('producto/facturado/mas-vendido')
    async getProductoMasVendido():Promise <{producto:Producto, total:number}>{
        return this.facturaService.findProductoMasVendido();
    }

    @Post()
    async create(
    @Body(new ValidationPipe({transform:true})) facturaDto:FacturaDto):Promise<Factura>{
        return this.facturaService.create(facturaDto);
    }

    @Post(':nroFactura/productos/:idProducto/cantidad/:cantidad')
    async addProductoToFactura(@Param('nroFactura') nroFactura:number,@Param('idProducto') idProducto:number,@Param('cantidad') cantidad:number){
        return this.facturaService.addProductoToFactura(nroFactura,idProducto,cantidad);
    }

    @Put(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async update(@Param('id',ParseIntPipe) id: number, @Body(new ValidationPipe({transform:true})) facturaDto:UpdateFacturaDto){
    return this.facturaService.update(id,facturaDto);
    }

    @Delete(':nroFactura/productos/:idProducto')
    async removeProducto(@Param('nroFactura') nroFactura:number,@Param('idProducto') idProducto:number){
        return this.facturaService.removeProductoFromFactura(nroFactura,idProducto);
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number){
        return this.facturaService.remove(id);
    }

}
