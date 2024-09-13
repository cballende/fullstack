
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

class rectangle{
  base:number;
  hight:number;

  constructor(base:number,hight:number){
    this.base=base;
    this.hight=hight;
  }
  set_area():number{
    return (this.base*this.hight);
  }
  set_perimeter(){
    return (this.base+this.hight)*2;
  }

  calcular_area(){
    return this.set_area();
  }
  calcular_perimetro(){
    return this.set_perimeter();

  }

}

let rec:rectangle= new rectangle(5,10);

console.log("El area del rectangulo es: "+rec.calcular_area());
console.log("El perimetro del rectangulo es: "+rec.calcular_perimetro());

