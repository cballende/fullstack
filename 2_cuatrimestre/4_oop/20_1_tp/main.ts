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
import { Rectangle } from "./class_rectangle";

let rec:Rectangle= new Rectangle(-5,10);
try {
  rec.validation();
}catch(error:unknown){
  if(error instanceof Error)
    console.error(error.name+": "+error.message);
  else
    console.error("Unknown error.");
  if (!(rec instanceof Rectangle  ))
      console.error("Instance can't be make it");
}
console.log("El area del rectangulo es: "+rec.calcularArea());
console.log("El perimetro del rectangulo es: "+rec.calcularPerimetro());
