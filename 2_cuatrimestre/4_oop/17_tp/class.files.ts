//const { writeFile } = require('fs/promises');
const fs = require('fs');

export class Files {

  private file:string;

  constructor(s:string){

    this.file=s;

  };

/**
 * Esta función se encarga de realizar C.R.U.D. sobre archivos
 * Se llama a la funcion de formateo de datos.
 * @param sOp es un arreglo con el parametro de la operación a realizar sobre un archivo
 * 
 * @return void
*/
public  fnFile(sOp:string,s?:string):string{
   switch (sOp){
    case 'read':
      fs.readFile(this.file,(error:string,datos:string)=>{
        if (error) {
          console.log(error);
        }else
          return(datos);
      });
      break;
    case 'create':
      break;
    case 'update':
      fs.writeFile(this.file,s);
      break;
    case 'delete':
      console.log('Deleted!');
      break;
    case 'rename':
      console.log('Renamed!');
      break;  
  
    default:
      console.log('No operation!');
    break;
  }
  return"NOP";
}

}