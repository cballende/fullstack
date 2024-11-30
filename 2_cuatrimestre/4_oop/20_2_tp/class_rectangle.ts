import { CustomError } from "./class_custom_error";

export class Rectangle{
  private base:number;
  private hight:number;

  constructor(base:number,hight:number){
    this.base=base;
    this.hight=hight;
  }
  private calArea():number{    
    return (this.base*this.hight);
  }
  private calPerimeter(){
    return (this.base+this.hight)*2;
  }

  public calcularArea():(number){
    return this.calArea();
  }
  public calcularPerimetro():(number){
    return this.calPerimeter();
  }
  public getBase():number{ return this.base;}

  public getHight():number{ return this.hight;}

  public validation(pval:number,pmessage:string){
    try {
      myFunc(pval,pmessage);
    } catch (CustomError) {
      //console.error(customError.name +": "+customError.message);
      /* Narrowing */
      console.log((CustomError as Error).name+": "+(CustomError as Error).message);
    }

    function myFunc(pval:number,pmessage:string):void{
      if(pval<0)
        throw new CustomError(pmessage);
      else
        console.log(`Validation: ${pmessage}?=false;`);
    }
  }

}
