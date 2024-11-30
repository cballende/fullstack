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

console.log("El area del rectangulo es: "+rec.calcularArea());
console.log("El perimetro del rectangulo es: "+rec.calcularPerimetro());