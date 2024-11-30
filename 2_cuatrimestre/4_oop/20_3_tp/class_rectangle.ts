import { CustomError } from "./class_custom_error";

export class Rectangle{
  private base:number;
  private hight:number;

  constructor(base:number,hight:number){
    this.base=base;
    this.hight=hight;
  }
  private calArea():number{
    this.validation(this.getBase(),"Base is invalid");
    this.validation(this.getHight(),"Highy is invalid");
    return (this.base*this.hight);
  }
  private calPerimeter(){
    this.validation(this.getBase(),"Base is invalid");
    this.validation(this.getHight(),"Highy is invalid");
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
      //console.error(CustomError.name +": "+CustomError.message); <- throw error by type CustomError unknow can't access property name and message
      // Historically, this has meant that the `e` in the catch
      // would default to any. This allowed for the freedom to
      // arbitrarily access any property. With 4.0, we've loosened
      // the restrictions on type assignment in the catch clause
      // to allow both `any` and `unknown`
      /* Narrowing CustomError to access methods and properties*/
      if (CustomError instanceof Error  ) {
       console.error(CustomError.name +": "+CustomError.message); 
      }
    }
    function myFunc(pval:number,pmessage:string):void{
      if(pval<0)
        throw new CustomError(pmessage);
      else
        console.log(`Validation: ${pmessage}?=false;`);
    }
  }

}
