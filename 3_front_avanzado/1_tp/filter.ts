
/* ################################################################################
#
# 
# File name : filter.ts
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


/*

interface obj {
  first: string;
  second: string;
}

let names: obj[] =[
  {first:"Jean",second:"Say"},
  {first:"Carl",second:"Menger"},
  {first:"Ludwing",second:"Mises"},
  {first:"Friedrich",second:"Hayek"},
  {first:"Karl",second:"Menger"},
  {first:"Jesus",second:"Soto"},
    {first:" Murray",second:"Rothbard"},
    {first:" Milton",second:"Friedman"},
  ];

  function show( {first, second} : {first:string, second:string} ):void{
    console.log(first+"    "+second);
    return;
  }
*/
interface obj {
  first: string;
  second: string;
}

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

function MyFunction( value: obj ){
  return(value.first.localeCompare("Susan")==0);
}

let res= names.filter( MyFunction);

//console.log(res.first+" "+res.second);
console.log(res);
