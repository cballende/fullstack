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
var rLS = require('readline-sync');
var listCart = [];
var exit=true;
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
function fnShortProduct(){
  let v=fnModel("read");
  let vShorted=[];
  let a:string;
  let b:Int;
    for ( vx of v)
      for ( vx of v)
        if(top<vx[1]){
          vShorted[0]=vx[0];
          vShorted[1]=vx[1];
        }
  return vShorted;
}
function fnFileOutput(){}

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
  switch (sKey) {
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
      fnVista(key,fnShortProduct());
      fnVista("footer");
    break;

    case "exit":
      
    break;

    case "":
      
    break;

    case "":
      
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
    case "sort":
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


