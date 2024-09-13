
/* ################################################################################
#
# 
# File name : filter.js
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

let names=[
  {first:"Jean",  second:"Say"},
  {first:"Carl",  second:"Menger"},
  {first:"Ludwing",second:"Mises"},
  {first:"Friedrich",second:"Hayek"},
  {first:"Karl",  second:"Menger"},
  {first:"Jesus", second:"Soto"},
  {first:"Murray",second:"Rothbard"},
  {first:"Milton",second:"Friedman"},
  {first:"Susan",second:"Zaranda"},
  {first:"Susan",second:"Nasus"},
];

function myFunction( value){
  return(value.first+"-"+value.second);
}
let res = names.map( myFunction);

console.log(res);
