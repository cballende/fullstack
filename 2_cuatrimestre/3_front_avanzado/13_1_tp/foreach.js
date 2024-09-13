
/* ################################################################################
#
# 
# File name : foreach.ts
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
];

names.forEach((name)=> {
  console.log(name.first+" "+name.second);
  });
