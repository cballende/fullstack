
import { Controller, Get, Post, Body,Put, Delete, Param, HttpCode, HttpStatus, ParseIntPipe,ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';  
import { UserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<UserDto[]> {
    return this.usersService.findAll();
  }
  
  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  async findOne(@Param('id',ParseIntPipe) id: number):Promise<UserDto | null> {
    console.log("findOne",id);
    return this.usersService.findOne(id);
  }
  
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body(new ValidationPipe({transform:true})) UserDto:CreateUserDto){
    return this.usersService.create(UserDto);
  }

  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async update(@Param('id',ParseIntPipe) id: number, @Body(new ValidationPipe({transform:true})) UpdateUserDto:UpdateUserDto ){
    return this.usersService.update(id, UpdateUserDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id',ParseIntPipe) id:number){
    return this.usersService.remove(id);
  }
}
