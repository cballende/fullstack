
/* ################################################################################
#
# Simple Cart
# File name : SimpleCart.js
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
//import { stringify } from "querystring";
let rLS = require('readline-sync');
//let fS = require('fs');

const { writeFile } = require('fs/promises');

const LGTH_LST:number =7;
const LGTH_LST_ELE:number =2;

let listCart: string[][]= new Array(LGTH_LST);

let exit:boolean=false;
let sKey:string='';

/**
 * Esta funcion se encarga de hacer de interfase entre los la entrada de datos y el modelo.
 * @param sN es una cadena con los parámetros que el recibe por consola
 * @param sP es una cadena con los parámetros que el recibe por consola
 * 
 * @return void
*/
function fnInputProducts(sN:string,sP:string):void{
  let vDat:string[]=[sN,sP];
  fnModel('write',vDat);
  return;
}

/**
 * Esta función se encarga de visualizar los datos en la consola.
 * @param vDat es un arreglo de cadenas duplas con los parámetros almacenados.
 *  La dupa consiste en la posición 0 en una cadena de un producto, la posición 1
 * corresponde a una cadena precio del producto.
 * 
 * @return void
*/
function fnShowProducts(vDat:string[][]):void{
  let i:any;
  for( i in vDat)
    console.log(vDat[i][0]+"    "+vDat[i][1]);

  return;
}
/**
 * Esta función se encarga de calcular el valor total de los producto.
 * La función llama a una model para solicitar todos los datos almacenados.
 * @param void
 * 
 * @return string es una cadena de numerales.
*/
function fnCalCart():string{
  let i:any;
  let iv:number=0;
  let vDat:string[][]=fnModel("read");

      for ( i in vDat)
        iv+= Number(vDat[i][1]);
      return ""+iv+"";
}
/**
 * Esta función se encarga de encontrar el producto con mayor precio.
 * La función llama a una model para solicitar todos los datos almacenados.
 * @param void
 * 
 * @return top[]:string arreglo de cadenas. Primera posicíon es el producto, segunda el precio.
*/
function fnTopRatedProduct():string[]{
  let vDat:string[][]=fnModel("read");
  let max:number=0;
  let i:any;
  let top:string[]=[];
      for ( i in vDat)
        if(max<Number(vDat[i][1])){
          top[0]=vDat[i][0];
          top[1]=vDat[i][1];
          max=Number(vDat[i][1]);
        }
  return top;
}
/**
 * Esta función se encarga de encontrar el producto con menor precio.
 * La función llama a una model para solicitar todos los datos almacenados.
 * @param void
 * 
 * @return top[]: string arreglo de cadenas. Primera posicíon es el producto, segunda el precio.
*/
function fnBotRatedProduct():string[]{
  let vDat:string[][]=fnModel("read");
  let min:number=Number(vDat[0][1]);
  let i:any;
  let top:string[]=[];

      for ( i in vDat)
        if(min>=Number(vDat[i][1])){
          top[0]=vDat[i][0];
          top[1]=vDat[i][1];
          min=Number(vDat[i][1]);
        }
  return top;
}
/**
 * Esta función se encarga de ordenar los datos segun el precio de manera descendente.
 * La función llama a una model para solicitar todos los datos almacenados.
 * @param void
 * 
 * @return vDat[]: string, arreglo de duplas de cadenas. Primera posicíon es el producto, segunda el precio.
*/
function fnSortProduct():string[][]{
  let vDat:string[][]=fnModel("read");
  let vSort=[];
  let vSorted:string[][]=new Array(LGTH_LST);

  let a:string='',b:string='';
  let j:number,i:number;
  for (i = 0; i < vDat.length-1; i++) {
    for (j = i+1; j < vDat.length; j++) {
      if(Number(vDat[i][1])<=Number(vDat[j][1])){
        a=vDat[j][0];
        vDat[j][0]=vDat[i][0];
        vDat[i][0]=a;

        b=vDat[j][1];
        vDat[j][1]=vDat[i][1];
        vDat[i][1]=b;
      }
    }
  } 
  return vDat;
}

/**
 * Esta función se encarga de formatear los datos en Json string,
 * La función llama a una model para solicitar todos los datos almacenados.
 * @param void
 * 
 * @return s:string cadena que contienen datos en formato Json.
*/
function fnArrToJson():string{

  let i:any;
  let s:string="{'data':[";
  let v:string[][]=fnModel("read");
      for ( i in v){
         s=s+"{'item':'"+v[i][0]+"','price':'"+v[i][1]+"'},"; 
        }
        s=s+"]}";
  return s;      
}

/**
 * Esta función se encarga de realizar C.R.U.D. sobre archivos
 * Se llama a la funcion de formateo de datos.
 * @param sOp es un arreglo con el parametro de la operación a realizar sobre un archivo
 * 
 * @return void
*/
function fnFile(sOp:string):void{
   switch (sOp){
    case 'read':      
      break;
    case 'create':

      break;
    case 'update':
      writeFile('sesion.txt',fnArrToJson());
      break;
    case 'delete':
      console.log('Deleted!');
      break;
    case 'rename':
      console.log('Renamed!');
      break;  
  
    default:
      console.log('No operation!');
      break;
  }
  return;
}

/*************************************************************
*    Model M.V.C Funtions
*************************************************************/

/**
 * Esta función se encarga de escribir y leer los datos.
 * La funcion presenta los datos en formato correcto para la visualización y almacenamiento.
 * @param sKey cadena que resulta un parametro de selección de operación
 * @param vDat parametro opcional, vector dupla. 
 * 
 * 
 * @return string;
*/

function fnModel(sKey:string,vDat:string[]=[]):string[][]{
  switch (sKey) {
    case "read":
      if(listCart.length>0)  
        return listCart;
      return [["FAIL"]]
      //return [['algo','2'],['algo','1']];
    break;

    case "write":
      if(vDat[0]){
        listCart.push(vDat);
        return [["OK"]];
      }return [["FAIL"]];
    break;
  
    default:
      return [["none"]];
    break;
  }
  //return [["none"]];
}

/**
 * Esta función se encarga presentar informacion por consola.
 * La funcion presenta los datos en formato correcto para la visualización y almacenamiento.
 * @param a cadena que resulta un parametro de selección de operación
 * @param vDat parametro opcional, arreglo de duplas. 
 * 
 * 
 * @return string;
*/
function fnVista(a:string,vDat:string[][]=[[""]]):void{
  switch (a){
    case "weelcome":
      console.log("Bienvenidos a su carro de compras");      
    break;
    case "menu":
      console.log("Menu de opciones:");  
      console.log("1- Ingresar Productos");
      console.log("2- Ver Productos Carrito");
      console.log("3- Ordenar Productos Por Precio");
      console.log("4- Producto Mayor Costo");
      console.log("7- Producto Menor Costo");

      console.log("5- Costo Total");
      console.log("6- Salir");
    break;
    case "input":
      console.log("Menu de opciones:");
      console.log("1- Ingresar Producto");
      console.log("2- Volver");
    break;
    case "input_next":
      console.log("Ingrese Producto");
      //console.log("1- Cancelar");
    break;
    case "fail":
      console.log("Ingrese Precio mayor a cero");
    break;
    case "success":
      console.log("¡¡¡Ingreso Exitoso!!!:");      
    break;
    case "footer":
      console.log("Menu de opciones;");  
      console.log("1- Volver");
      break;
    case "show":
      console.log("Lista Carrito;");
      console.log("Producto     Costo");
    break;
    case "show_next":      
      fnShowProducts(vDat);
    break;
    case "cal":
      console.log("Costo Total Carrito;");
      console.log("$"+vDat[0][0]);
    break;
    case "top":
      console.log("Producto Mayor Costo");
      console.log("Producto     Costo");
      console.log(vDat[0][0]+"          $"+vDat[0][1]);
    break;
    case "bot":
      console.log("Producto Menor Costo");
      console.log("Producto     Costo");
      console.log(vDat[0][0]+"          $"+vDat[0][1]);
    break;
    case "short":
      console.log("Lista Carrito Orden");
      console.log("Producto     Costo");
      fnShowProducts(vDat);   

    break;
    case "exit":
      console.log("Menu de opciones;");
      console.log("1- ¿Desea Salir?");
      console.log("2- Volver");

    break;
    case "exit_next":
      console.log("¡¡¡GRACIAS POR SU COMPRA!!!");
    break;

    default:
      break;
  }
}

/**
 * Esta función se encarga administrar la funcion fnVista y fnModel
 * La funcion presenta los datos en formato correcto para la visualización y almacenamiento.
 * @param sKey cadena que resulta un parametro de selección de operación
 * 
 * @return string;
*/
function fnControler(sKey:string):string{
  switch (sKey) {
    case "option":
      sKey=rLS.keyIn('');
      switch (sKey) {
        case '1':
          return "input";
        break;

        case '2':
          return "show";
        break;
        
        case '3':
          return "short"
        break;
        
        case '4':
          return "top";   
        break;

        case '5':
          return "cal";  
        break;

        case '6':
          return "exit";  
        break;
        case '7':
          return "bot";  
        break;
      
        default://menu
          return "none";
          break;
      }
    break;

    case "input":
      let condition:boolean=true;
      do {
        fnVista(sKey);
        switch (rLS.keyIn('')) {
          case "1":
            let condition:boolean=true;
            do {
              fnVista('input_next');
              let sN:string=rLS.question('Nombre Producto: ');
              let sP:string=rLS.question('Precio Producto: ');
              if (Number(sP)>0){
                condition=false;
                fnInputProducts(sN,sP);
              }else{
                fnVista('fail');    
              }              
            } while (condition);
            fnVista('success');
            break;
          case "2":
            return'none';
          break;  
          default:
            return'none';
            break;
        }        
      } while (condition);
      return'none';
    break;
    case "show":
      fnVista(sKey);
      //console.log(fnModel("read"));
      fnVista( sKey+"_next",fnModel("read") );
      fnVista("footer");    
    break;
      
    case "cal":
      fnVista(sKey,[[fnCalCart()]]);
      fnVista("footer");
    break;        

    case "top":
      fnVista(sKey,[fnTopRatedProduct()]);
      fnVista("footer");
    break;
    case "bot":
      fnVista(sKey,[fnBotRatedProduct()]);
      fnVista("footer");
    break;
      
    case "short":
      fnVista(sKey,fnSortProduct());
      fnVista("footer");
    break;
        
    case "exit":
      fnVista(sKey);
      switch (rLS.keyIn('')) {
        case "1":
            fnFile('update');
            fnVista(sKey+"_next");
            return 'exit';
          break;
        case "2":
          return 'none';
        break;
        default:
          return 'none';
          break;
      }
    break;
    default:
        return 'none';
      break;
  }
  return 'none';
}

/* Cartel de inicio */
fnVista('weelcome');

/**
 * Este es el lazo principal el programa que se encarga administrar el modelo MVC
 * Los parametros ingresados por consola, evolucionan el controlador de modelo.
*/
while(!exit){
  fnVista('menu');
  sKey = fnControler('option');
  switch (sKey) {
    case "input":
      fnControler(sKey);
    break;
    case "show":
      fnControler(sKey);
    break;
    case "cal":
      fnControler(sKey);
    break;
    case "top":
      fnControler(sKey);
    break;
    case "bot":
      fnControler(sKey);
    break;
    case "short":
      fnControler(sKey);
    break;
    case "exit":
      if ('exit'==fnControler(sKey)){
        exit=true;
      }
    break;
    default:
      console.log('FAILURE');
    break;
  }
}


