import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ClienteDto } from './dto/cliente.dto';

import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClienteService {

  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  async findAll():Promise<Cliente[]> {
    return this.clienteRepository.find();
  }
  
  async findOne(id: number):Promise<Cliente | null> {
   return this.clienteRepository.findOne({where: { id }});
  }
  
  async create(clienteDto: CreateClienteDto) : Promise<ClienteDto> {
    let nuevoCliente = this.clienteRepository.save(clienteDto);
    return nuevoCliente;   
  }
  
  async update(id: number, clienteDto: UpdateClienteDto) {
    let cliente = await this.clienteRepository.findOneBy({id});
    if(!cliente){
      throw new NotFoundException("Cliente No existe");
    }
    let clienteActualizado = this.clienteRepository.merge(cliente,clienteDto);
    return this.clienteRepository.save(clienteActualizado);
  }

  async remove(id: number) {
    return this.clienteRepository.delete(id);
  }
}

