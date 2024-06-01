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
var rLS = require('readline-sync');
var fS = require('fs');
var LGTH_LST = 7;
var LGTH_LST_ELE = 2;
var listCart = new Array(LGTH_LST);
/* listCart[0]: string[]= new Array(LGTH_LST_ELE);
listCart[1]: string[]= new Array(LGTH_LST_ELE);
listCart[2]: string[]= new Array(LGTH_LST_ELE);
listCart[3]: string[]= new Array(LGTH_LST_ELE);
listCart[4]: string[]= new Array(LGTH_LST_ELE);
listCart[5]: string[]= new Array(LGTH_LST_ELE);
listCart[6]: string[]= new Array(LGTH_LST_ELE);
 */
var exit = true;
var sKey = '';
function fnShowProducts(vDat) { return; }
function fnControler(sKey) { return sKey; }
function fnVista(a, vDat) {
    if (vDat === void 0) { vDat = 0; }
    switch (a) {
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
            fnShowProducts(vDat);
            break;
        case "cal":
            console.log("Costo Total Carrito;");
            console.log("$" + vDat);
            break;
        case "top":
            console.log("Producto Mayor Costo");
            console.log(vDat[0] + "   $" + vDat[1]);
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
            console.log("Gracias Por Su Compra");
            break;
        default:
            break;
    }
}
fnVista('weelcome');
while (exit) {
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
        case "short":
            fnControler(sKey);
            break;
        case "exit":
            if (null = fnControler(sKey)) {
                exit = false;
            }
            break;
        default:
            console.log('FAILURE');
            break;
    }
}
