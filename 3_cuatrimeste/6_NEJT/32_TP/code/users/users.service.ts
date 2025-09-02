import { BadRequestException, ConflictException, Injectable, HttpStatus, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { plainToInstance } from 'class-transformer';


@Injectable()
export class UsersService {

  private baseUrl = 'http://localhost:3030/users';

  async findAll():Promise<UserDto[]> {
     try {
      const response = await fetch(this.baseUrl);
      if(response.status === HttpStatus.BAD_REQUEST)
       throw new BadRequestException('Mala consulta a la api');

      if(response.status === HttpStatus.NOT_FOUND )
       throw new NotFoundException('No existen usuarios en la api');

      if(!response.ok)
       throw new Error('Error al buscar el usuario mediante finAll');
      const data = await response.json();
      const dat= data.map(user=>plainToInstance( UserDto , user , { excludeExtraneousValues: true } ));
      return dat;
      

    } catch (error) {
       if(error instanceof BadRequestException){
        throw new BadRequestException('Mala consulta a la api');
      }else if(error instanceof NotFoundException){
        throw new NotFoundException('No existen usuarios en la api');
      }else{
        throw new Error('Error al buscar el usuario mediante finAll');
      }
    }    
  }

  async findOne(id: number):Promise<UserDto> {
    try {
      
      const response = await fetch(this.baseUrl+"/"+id);
      if(response.status === HttpStatus.BAD_REQUEST)
       throw new BadRequestException('Datos enviados mal a la api');

      if(response.status === HttpStatus.NOT_FOUND )
       throw new NotFoundException('El usuario no existe en la api');

      if(!response.ok)
       throw new Error('Error al encontrar el usuario');
      const data = await response.json();
      return plainToInstance( UserDto , data , { excludeExtraneousValues: true } );

    } catch (error) {
       if(error instanceof BadRequestException){
        throw new BadRequestException('Datos enviados mal a la api');
      }else if(error instanceof NotFoundException){
        throw new NotFoundException('El usuario no existe en la api');
      }else{
        throw new Error('Error al encontrar el usuario #'+id);
      }
    }

  }


  async create(createUserDto: CreateUserDto):Promise<UserDto> {
    try{
      const response = await fetch(this.baseUrl,
                                   {
                                      method: 'POST',
                                      headers: { 'Content-Type': 'application/json' },
                                      body: JSON.stringify(createUserDto),
                                   }
                                  );

      if(response.status === HttpStatus.BAD_REQUEST)
        throw new BadRequestException('Datos enviados mal a la api');

      if(response.status === HttpStatus.CONFLICT)
        throw new ConflictException('El usuario ya existe en la api');

      if(!response.ok)
        throw new Error('Error al crear el usuario');

      const data = await response.json();

      return plainToInstance(UserDto, data, { excludeExtraneousValues: true });
      
    }catch(err){
      if(err instanceof BadRequestException){
        throw new BadRequestException('Datos enviados mal a la api');
      }else if(err instanceof ConflictException){
        throw new ConflictException('El usuario ya existe en la api');
      }else{
        throw new Error('Error al crear el usuario');
      }
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto):Promise<UserDto> {
    try{
      const resCheck = await fetch(this.baseUrl+"/"+id);
      if(resCheck.status === HttpStatus.BAD_REQUEST)
       throw new BadRequestException('Datos enviados mal a la api');

      if(resCheck.status === HttpStatus.NOT_FOUND )
       throw new NotFoundException('El usuario no existe en la api');

      if(!resCheck.ok)
        throw new Error('Error al buscar el usuario previo actualizar');

      const response = await fetch(this.baseUrl+"/"+id,
                                  {
                                    method: 'PUT',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify(updateUserDto),
                                  });

      if(response.status === HttpStatus.BAD_REQUEST)
        throw new BadRequestException('Datos enviados mal a la api');

      if(!response.ok)
        throw new Error('Error al actualizar el usuario');

      const data = await response.json();

      return plainToInstance(UserDto, data, { excludeExtraneousValues: true });
      
    }catch(err){
      if(err instanceof BadRequestException){
        throw new BadRequestException('Datos enviados mal a la api');
      }else if(err instanceof NotFoundException){
        throw new NotFoundException('El usuario no existe en la api');

      }else{
        throw new Error('Error al actualizar el usuario #'+id );
      }
    }
  }

  async remove(id: number) {
    try{
      const resCheck = await fetch(this.baseUrl+"/"+id,
                                    {
                                      method: 'DELETE'
                                    }
                                  );
      if(resCheck.status === HttpStatus.BAD_REQUEST)
       throw new BadRequestException('Datos enviados mal a la api');

      if(resCheck.status === HttpStatus.NOT_FOUND )
       throw new NotFoundException('El usuario no existe en la api');

      if(!resCheck.ok)
        throw new Error('Error al buscar el usuario previo eliminar');

      const response = await fetch(this.baseUrl+"/"+id,{
        method: 'DELETE'        
      });

      if(response.status === HttpStatus.BAD_REQUEST)
        throw new BadRequestException('Datos enviados mal a la api');

      if(!response.ok)
        throw new Error('Error al eliminar el usuario');

      const data = await response.json();

      return plainToInstance(UserDto, data, { excludeExtraneousValues: true });
      
    }catch(err){
      if(err instanceof BadRequestException){
        throw new BadRequestException('Datos enviados mal a la api');
      }else if(err instanceof NotFoundException){
        throw new NotFoundException('El usuario no existe en la api');

      }else{
        throw new Error('Error al eliminar el usuario #'+id );
      }
    }
 }

}
