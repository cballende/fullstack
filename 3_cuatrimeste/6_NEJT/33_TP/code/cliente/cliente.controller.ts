import { Controller, Get, Post, Body, Patch,HttpCode, Param, Delete, ParseIntPipe, Put, HttpStatus } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteDto }     from './dto/cliente.dto';
import { CreateClienteDto }from './dto/createCliente.dto';
import { UpdateClienteDto }from './dto/updateCliente.dto';


//import { Cliente }        from './entities/cliente.entity';
import { ValidationPipe } from '@nestjs/common';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<ClienteDto[]> {
    return this.clienteService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  async findOne(@Param('id',ParseIntPipe) id: number):Promise<ClienteDto | null> {
    return this.clienteService.findOne(id);
  }

  
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body(new ValidationPipe({transform:true})) clienteDto:CreateClienteDto){
    console.log("datos recibidos para crear"+clienteDto);
    return this.clienteService.create(clienteDto);
  }
  
  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async update(@Param('id',ParseIntPipe) id: number, @Body(new ValidationPipe({transform:true})) clienteDto:ClienteDto){
    return this.clienteService.update(id,clienteDto);
  }
  
  @Delete(':id')
  async remove(@Param('id',ParseIntPipe) id:number){
    return this.clienteService.remove(id);
  }
}
