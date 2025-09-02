import { Controller,Param,Body, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("api")
export class AppController {
  /*
    injects services
  */ 
  constructor(private readonly appService: AppService) {}

  @Get('tracks')
  getAll():Promise<any> {
    return this.appService.getAll();
  }

  @Get('tracks/:id')
  getOne(@Param('id') id:string): Promise<any> {
    return this.appService.getOne(id);
  }

  @Post('tracks')
  create(@Body()track:any): Promise<string>  {
    return this.appService.create(track);
  }

  @Put('tracks/:id')
  update(@Param('id') id:string,@Body()track:any):Promise<any> {
    return this.appService.update(id,track);
  }
    
  @Delete('tracks/:id')
  delete(@Param('id') id:string):Promise<any>  {
    return this.appService.delete(id);
  }
  

}
