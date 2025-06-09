import { Injectable } from '@nestjs/common';
import { promises } from 'dns';

@Injectable()
export class AppService {
  private url= 'http://localhost:3030/tracks';

  async getAll() { 
    const response = await fetch(this.url);
    const  datos= await response.json();
    return datos; 
  }

  async getOne(id:string) { 
    const response = await fetch(this.url+'/'+id);// GET default.
    console.log(response);
    const  datos= await response.json();
    return datos; 
  }
  
  async create(track:any) { 

    const response = await fetch( this.url,
                                  {
                                    method: 'POST',
                                    headers: {
                                      'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(track)
                                  }
                                );
    console.log(response);
    
    if (!response.ok) {
      throw new Error('Error crear track');  
    }else
      return "Se creo con exito";    
  }

  async update(id:string, track:any) { 
    const response = await fetch( this.url+'/'+id,
                                  {
                                    method: 'POST',
                                    headers: {
                                      'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(track)
                                  });
    if (!response.ok) {
      throw new Error('Error editar track');
    }else
      return "Se editó con exito";
  }

  async delete (id:string) {
    const response = await fetch( this.url+'/'+id,
                                  {
                                    method: 'DELETE'
                                  });
    console.log(response);
    if (!response.ok){
      throw new Error('Error eliminar track');}
    else{
      return "Se eliminó con exito";}                              
    } 
}
