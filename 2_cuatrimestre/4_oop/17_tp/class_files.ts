//const { writeFile } = require('fs/promises');
const fs = require('fs');
//console.log(fs);
export class Files {

  private fileName:string;

  constructor(s:string){

    this.fileName=s;

  };

/**
 * Esta función se encarga de realizar C.R.U.D. sobre archivos
 * Se llama a la funcion de formateo de datos.
 * @param sOp es un arreglo con el parametro de la operación a realizar sobre un archivo
 * 
 * @return void
*/
public  fnFile(sOp:string,s?:string):string{
  let res:string="";
  switch (sOp){
    case 'read':
      //console.log(sOp);
      res="ERR lectura";
      let data = fs.readFileSync(this.fileName,'utf8');
      try {
        let data = fs.readFileSync(this.fileName, 'utf8');
        res=data;
      } catch (err) {
        console.error(err);
        res="ERR lectura";
      }
      return res;
      break;
    case 'create':
      //console.log(sOp);
      res="OK"
      fs.writeFile(this.fileName,"",function (err:string) {
        if (err){
          res= "ERR";
          throw err;
        } }
      );
      return res;
      break;
    case 'update':
      //console.log(sOp);
      res="OK"
      fs.writeFile(this.fileName,s,function (err:string) {
        if (err){
          res= "ERR";
          throw err;
        } }
      );
      return res;
      break;
    case 'delete':
      console.log(sOp);
      break;
    case 'rename':
      console.log(sOp);
      break;
    case 'status':
      //console.log(sOp);
      fs.stat(this.fileName,(err:string, stats:any) => {
        if (err) {
          console.error(err);
        }
        stats.isFile(); // true
        stats.size; // 1024000 //= 1MB
      });
      break;    
    case 'access':
      //console.log(sOp);
      res="EX";
      fs.access(this.fileName,fs.constants.F_OK,(err:string) => {
        if (err) {
          console.error(err);
          res="NOEX";
        }
      });
      return res;
      break;  
    default:
      console.log('NOP');
    break;
  }
  return"NOP";
}

}