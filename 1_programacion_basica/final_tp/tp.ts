import { stringify } from "querystring";

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
let rLS = require('readline-sync');
let fS = require('fs');

const LGTH_LST:number =7;
const LGTH_LST_ELE:number =2;

let listCart: string[][]= new Array(LGTH_LST);
listCart[0]: string[]= new Array(LGTH_LST_ELE);
listCart[1]: string[]= new Array(LGTH_LST_ELE);
listCart[2]: string[]= new Array(LGTH_LST_ELE);
listCart[3]: string[]= new Array(LGTH_LST_ELE);
listCart[4]: string[]= new Array(LGTH_LST_ELE);
listCart[5]: string[]= new Array(LGTH_LST_ELE);
listCart[6]: string[]= new Array(LGTH_LST_ELE);

let exit=true;

function fnInputProducts(sN,iP){  
  dat=[sN,iP];
  fnModel('write',dat);
  return;
}
function fnShowProducts(vdat){
  for ( x of vdat)
	      console.log(x[1]+"    "+x[2]);
}
function fnCalCart(){
  let iv=0;
  let v=fnModel("read");
      for ( vx of v)
        iv+=vx[1];
      return iv;
}
function fnTopRatedProduct(){
  let v=fnModel("read");
  let top=[];
      for ( vx of v)
        if(top<vx[1]){
          top[0]=vx[0];
          top[1]=vx[1];
        }
  return top;
}
function fnSortProduct(){
  let v=fnModel("read");
  let vSort=[];
  let vSorted=[];

  let a:string;
  let b:Int;

  for (let i = 0; i < v.length-1; i++) {
    for (let j = i+1; j < v.length; j++) {
      if(v[i][1]>=v[j][1]){
        a=v[j][0];
        v[j][0]=v[i][0];
        v[i][0]=a;

        b=v[j][1];
        v[j][1]=v[i][1];
        v[i][1]=b;
      }
    }
  } 
  return vShorted;
}
function fnFile(sOp,vData){
  switch (sOp) {
    case 'read':
      
      break;
    case 'create':
      fS.open('sesion.txt','W',function (err, file) {
        if (err) throw err;
        console.log('Open!');
      });      
      break;
    case 'update':
      fs.writeFile('sesion.txt', vData.toString, function (err) {
        if (err) throw err;
        console.log('Saved!');
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
}

function fnModel(key,dat){
  switch (key) {
    case "read":
      return listCart.pop();
    break;

    case "write":
      listCart.push(dat);
      return ;
    break;
  
    default:
      return null;   
    break;
  }
}

function fnControler(key){
  switch (key) {
    case "option":
      key=rLS.keyIn('');
      switch (key) {
        case 1:
          return "input";
        break;

        case 2:
          return "show";
        break;
        
        case 3:
          return "short"
        break;
        
        case 4:
          return "top";        
        break;

        case 5:
          return "cal";  
        break;

        case 6:
          return "exit";  
        break;
      
        default://menu
          return null;
          break;
      }
    break;

    case "input":
      condition=true;
      do {
        fnVista(key);
        switch (rLS.keyIn('')) {
          case 1:
            fnVista('input_next');
            sN=rLS.question('Nombre Producto');
            iP=rLS.question('Precio Producto');
            fnInputProducts(sN,iP);
            fnVista('success');
            break;
          case 2:
            return;
          break;  
          default:
            return;
            break;
        }        
      } while (condition);
      return;
    break;

    case "show":
      fnVista(key);
      fnVista( key+"_next",fnModel(read) );
      fnVista("footer");      
    break;

    case "cal":
      fnVista(key,fnCalCart());
      fnVista("footer");
    break;

    case "top":
      fnVista(key,fnTopRatedProduct());
      fnVista("footer");
    break;

    case "short":
      fnVista(key,fnSortProduct());
      fnVista("footer");
    break;

    case "exit":
      fnVista(key);
      switch (rLS.keyIn('')) {
        case 1:
          fnFileOutput();
          fnVista(key+"_next");
          return null;
          break;
        case 2:
          return;
        break;  
        default:
          return;
          break;
      }
    break;
  
    default:
      break;
  }
}
function fnVista(a,vdat){
  switch (a){
    case "weelcome":
      console.log("Bienvenidos a su carro de compras");      
    break;
    case "menu":
      console.log("Menu de opciones;");  
      console.log("1- Ingresar Productos");
      console.log("2- Ver Productos Carrito");
      console.log("3- Ordenar Productos Por Precio");
      console.log("4- Producto Mayor Costo");
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
    case "success":
      console.log("Ingresó Producto");
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
      fnShowProducts(vdat);
    break;
    case "cal":

      console.log("Costo Total Carrito;");
      console.log("$"+vdat);
      
    break;
    case "top":
      console.log("Producto Mayor Costo");
      console.log(vdat[0]+"   $"+vdat[1]);
    break;
    case "short":
      console.log("Lista Carrito Orden");
      console.log("Producto     Costo");
      fnShowProducts(vdat);      

    break;
    case "exit":
      console.log("Menu de opciones;");
      console.log("1- ¿Desea Salir?");
      console.log("2- Volver");

    break;
    case "exit_next":
      console.log("Gracias Por Su Compra");
    break;

    default:
      break;
  }
}

fnVista('weelcome');

while(exit){
  fnVista('menu');
  key = fnControler('option');
  switch (key) {
    case "input":
      fnControler('key');
    break;
    case "show":
      fnControler('key');
    break;
    case "cal":
      fnControler('key');
    break;
    case "top":
      fnControler('key');
    break;
    case "short":
      fnControler('key');
    break;
    case "exit":
      if (null=fnControler('key')){
        exit=false;
      }
    break;
    default:
    break;
  }
}


