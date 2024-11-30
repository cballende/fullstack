
export class Rectangle{
  private base:number;
  private hight:number;

  constructor(pbase:number,phight:number){
    this.base=pbase;
    this.hight=phight;    
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
  
  public validation():void{
    if (this.base<0) {
      throw new Error("base invalid");
      /* mainstream is break*/
    }
    if (this.hight<0) {
      throw new Error("hight invalid");
      /* mainstream is break*/
    }
  }

}
