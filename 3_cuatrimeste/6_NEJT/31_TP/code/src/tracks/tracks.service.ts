import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { title } from 'process';

@Injectable()
export class TracksService {

    private baseUrl = 'http://localhost:3030/tracks';

    async getAll(){
        try{
            const response = await fetch(this.baseUrl);
            /*Error level request*/
            if(!response.ok)
                throw new NotFoundException('No se encontraron tracks en esa url');
            /*succefull request*/
            console.log(response);
            const data = await response.json();
            return data;
        } catch(err){
            /*Error unknow, filter by type  */
            if(err instanceof NotFoundException){
                throw new NotFoundException('No se encontraron tracks en esa url');
            }
            /*Error unknow, uncertain and not listed below */
            throw new Error('Fallo el metodo getAll() Track Service');
        }

    }
    
    async getOne(id:number){
        try {
            const response = await fetch(this.baseUrl +"/"+ id);
            if(!response.ok)
                throw new NotFoundException('No se encontró track en esa url');
            const data = await response.json();
            return data;
            
        } catch (err) {
            if(err instanceof NotFoundException){
                throw new NotFoundException('No se encontró track en esa url');
            }
            throw new Error('Fallo el metodo getOne() Track Service');            
        }    
    }

    async create(track:any){
        try {
            const response = await fetch(this.baseUrl,
                    {
                        method:'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(track)
                    }
                )
            /*Error level */    
            if(!response.ok)
                throw new HttpException('No se creo el Track', HttpStatus.UNRECOVERABLE_ERROR);                
            
        } catch (err) {
            if(err instanceof HttpException){
                throw new HttpException('No se creó el Track', HttpStatus.UNRECOVERABLE_ERROR);                
            }
            throw new Error('Fallo el metodo creat() Track Service');            
        }

    }

    async update(id:number,body:any){

        try {
            const reschk = await fetch(this.baseUrl +"/"+ id);
            if(!reschk.ok)
                throw new NotFoundException('No se encontró track en esa url');

            const response = await fetch(this.baseUrl + "/" + id,
                {
                    method:'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(body)
                }
            )
    
            if(!response.ok)
                throw new HttpException('No se editó el Track', HttpStatus.UNRECOVERABLE_ERROR);                                
            
         } catch (err) {
            if(err instanceof HttpException){
                throw new HttpException('No se editó el Track', HttpStatus.UNRECOVERABLE_ERROR);                
            }
            
            throw new Error('Fallo el metodo update() Track Service');
        }
    }

    async delete(id:number){
        try {            
            const reschk = await fetch(this.baseUrl +"/"+ id);
            if(!reschk.ok)
                throw new NotFoundException('No se encontró track en esa url');

            const response = await fetch(this.baseUrl + "/" + id,{
                method:'DELETE'
            })
    
            if(!response.ok)
               throw new HttpException('No se eliminó el Track', HttpStatus.UNRECOVERABLE_ERROR);
            
        } catch (err) {
             if(err instanceof HttpException){
                throw new HttpException('No se eliminó el Track', HttpStatus.UNRECOVERABLE_ERROR);                
            }
            throw new Error('Fallo el metodo delete() Track Service');
        }
        
    }

}
