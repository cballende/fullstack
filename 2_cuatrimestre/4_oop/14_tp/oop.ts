
/* ################################################################################
#
# 
# File name : oop.ts
# 
# Copyright (c)
#
# Licensed under The MIT License
# For full copyright and license information, please see the LICENSE.txt
# Redistributions of files must retain the above copyright notice.
#
# @link          https://
# @since         1
# @license       https://
#
############################################################################### */

class Rectangle{
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

  public calcular_area():(number){
    return this.calArea();
  }
  public calcular_perimetro():(number){
    return this.calPerimeter();
  }

}

let rec:Rectangle= new Rectangle(5,10);

console.log("El area del rectangulo es: "+rec.calcular_area());
console.log("El perimetro del rectangulo es: "+rec.calcular_perimetro());

