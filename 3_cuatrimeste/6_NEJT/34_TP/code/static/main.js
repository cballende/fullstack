const API_URL = 'http://localhost:3000/';

let btnConsulta = document.getElementById("getId");
btnConsulta.addEventListener("click",obtenerCliente);

let btnEliminar = document.getElementById("deleteId");
btnEliminar.addEventListener("click",eliminarCliente);

let btnCrear = document.getElementById("createBtn");
btnCrear.addEventListener("click",crearCliente);

let select = document.getElementById("select_update");
select.addEventListener("click",obtenerClientes);
select.addEventListener("change",actualizarDataCliente);

let btnActualizar = document.getElementById("updateBtn");
btnActualizar.addEventListener("click",actualizarCliente);



let selFac = document.getElementById("select_update_factura");
selFac.addEventListener("click",obtenerFacturas);
selFac.addEventListener("change",actualizarDataFactura);

let btnActFac = document.getElementById("updateFacturaBtn");
btnActFac.addEventListener("click",actualizarFactura);

let selPro = document.getElementById("select_update_producto");
selPro.addEventListener("click",obtenerProductos);
selPro.addEventListener("change",actualizarDataProducto);

let btnActPro = document.getElementById("updateProductoBtn");
btnActPro.addEventListener("click",actualizarProducto);



function checkString(s){
    if(s!=undefined)
       return Boolean (s.length>0 && (typeof(s)==="string"));
    return false;
}

function checkNum(i,op=""){
    if(i!=undefined)
       switch (op) {
        case "id":
            return Boolean(parseInt(i)>0);    
        default:
            return Boolean(parseInt(i)>=0);            
       } 
    return false;
}

function factor(s,forge="string"){
    if(s!=undefined)
        switch (forge) {
            case "string":
                    if (typeof(s)==="string"){
                        s=s.trim();
                        return s.toLowerCase();
                    }else if ((typeof(s)==="number"))
                        return parseInt(s);                
                break;
            default:
                    return parseInt(s);           
        }
    return;
}


async function obtenerCliente(){
    const id = document.getElementById("getIdinput").value;
    const respuesta = await fetch(API_URL + "cliente/" + id);
    const data = await respuesta.json();
    document.getElementById("getResult").textContent = JSON.stringify(data,null,2);
}

async function obtenerClientes(){
    const respuesta = await fetch(API_URL+"cliente");
    const data = await respuesta.json();
    let dSel = document.getElementById("select_update");
    let dOps =dSel.querySelectorAll("option");
    if (dOps.length)
        dOps.forEach(element => {
            element.remove();
        });
    let dOpt;
    data.forEach(element => {
        dOpt= document.createElement('option');
        dOpt.value=element.id;
        dOpt.textContent=JSON.stringify(element,null,2);
        dSel.appendChild(dOpt);
    });    
}

async function eliminarCliente(){
    let id= factor(document.getElementById("inputDeleteId").value,"number");
    try{
    
        if (checkNum(id,"id")){
            const respuesta = await fetch(API_URL + "cliente/" + id,
                {method:'DELETE'});
                if(!respuesta.ok){
                    throw new Error("no se pudo eliminar al cliente");
                }
                const data = await respuesta.json();
                document.getElementById("deleteResult").innerHTML = "Cliente eliminado";
        }else
            throw new Error("Error formato indice head");

    }catch(error){
        console.log(error.message + " no se pudo eliminar el cliente");
    }
}

async function crearCliente(){
    try{
        let nombre = factor(document.getElementById("nombre_update").value);
        let apellido = factor(document.getElementById("apellido_update").value);
        let direccion = factor(document.getElementById("direccion_update").value);
        let activo = factor(document.getElementById("activo_update").value,"number");

        let bool= checkString(nombre) && checkString(apellido) && checkString(direccion) && checkNum(activo);
        if (bool){

            const cliente = {
                nombre: document.getElementById("nombre").value,
                apellido:document.getElementById("apellido").value,
                direccion:document.getElementById("direccion").value,
                activo:document.getElementById("activo").value
            }

            const respuesta = await fetch(API_URL+"cliente",
                { method:'POST',
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify(cliente),
            });
            if(!respuesta.ok){
                throw new Error("no se pudo crear el cliente");
            }else{
                document.getElementById("createResult").innerHTML = "Cliente Creado!!";
            }
        }else
            throw new Error("Error formato body payload");
    }catch(error){
            document.getElementById("createResult").innerHTML = "Cliente NO SE PUDO CREAR!! "+error.message;
    }
}

async function actualizarCliente(){
    try{
        let id= factor(document.getElementById("id_update").value);
        console.log(id);
        console.log(checkNum(id,"id"));

        if (checkNum(id,"id")){
            
            let nombre = factor(document.getElementById("nombre_update").value);
            let apellido = factor(document.getElementById("apellido_update").value);
            let direccion = factor(document.getElementById("direccion_update").value);
            let activo = factor(document.getElementById("activo_update").value,"number");

            let bool= checkString(nombre) && checkString(apellido) && checkString(direccion) && checkNum(activo);
            if (bool){
                
                const cliente = {
                    nombre:nombre,
                    apellido:apellido,
                    direccion:direccion,
                    activo:activo
                };
                
                const respuesta = await fetch(  API_URL+'cliente/'+id,
                    {   method:'PUT',
                        headers: {'Content-Type': 'application/json'},
                        body:JSON.stringify(cliente)
                    }
                );
                console.log(respuesta);
                if(!respuesta.ok){
                    throw new Error("no se pudo modificar el cliente");
                }else{
                    document.getElementById("updateResult").innerHTML = "Cliente Modificado!!";
                }
            }else
                throw new Error("Error formato body payload");
            
        }else
            throw new Error("Error formato indice head");
    }catch(error){
        document.getElementById("updateResult").innerHTML = "Cliente NO SE PUDO MODIFICAR!! "+error.message;
    }
}


function actualizarDataCliente(){
    let dSel = document.getElementById("select_update");
    let dOps= dSel.querySelectorAll("option");
    if(dOps.length)
        dOps.forEach(searchFun);
    
    function searchFun(elem) {
        let oData= JSON.parse(elem.text);        
        
        //console.log(oData);
        if (oData.id == dSel.value){
            document.getElementById("id_update").value= oData.id ;
            document.getElementById("nombre_update").value= oData.nombre ;
            document.getElementById("apellido_update").value= oData.apellido ;
            document.getElementById("direccion_update").value= oData.direccion ;
            document.getElementById("activo_update").value= oData.activo;
        }
    }
}

async function obtenerFacturas(){
    const respuesta = await fetch(API_URL+"factura");
    const data = await respuesta.json();
    let dSel = document.getElementById("select_update_factura");
    let dOps = dSel.querySelectorAll("option");
    if (dOps.length)
        dOps.forEach(element => {
            element.remove();
        });
    let dOpt;
    data.forEach(element => {
        dOpt= document.createElement('option');
        dOpt.value=element.id;
        dOpt.textContent=JSON.stringify(element,null,2);
        dSel.appendChild(dOpt);
    });    
}


async function actualizarFactura(){
    let id= factor(document.getElementById("id_update_factura").value,"number");
    try{
        if (checkNum(id,"id")) {
            let fecha = factor(document.getElementById("fecha_update_factura").value);
            let iva = factor(document.getElementById("iva_update_factura").value,"number");
            let total_sin_iva = factor(document.getElementById("total_update_factura").value,"number");
            let total_con_iva = factor(document.getElementById("total_iva_update_factura").value,"number");

            let bool= checkString(fecha) && checkNum(iva)&& checkNum(total_sin_iva)&& checkNum(total_con_iva);
            
            if (bool){ 
                const factura = {
                    fecha: fecha,
                    iva: iva ,
                    total_sin_iva: total_sin_iva,
                    total_con_iva: total_con_iva
                };
    
                const respuesta = await fetch(  API_URL+'factura/'+id,
                                                {   method:'PUT',
                                                    headers: {'Content-Type': 'application/json'},
                                                    body:JSON.stringify(factura)
                                                }
                                            );
                                            console.log(respuesta);
                if(!respuesta.ok){
                    throw new Error("no se pudo modificar el Factura");
                }else{
                    document.getElementById("updateFacturaResult").innerHTML = "Factura Modificada!!";
                }
            }
        }else
            throw new Error("Error formato indice head");

    }catch(error){
        document.getElementById("updateFacturaResult").innerHTML = "Factura NO SE PUDO MODIFICAR!! "+error.message;
    }
}    

function actualizarDataFactura(){
    let dSel = document.getElementById("select_update_factura");
    let dOps=dSel.querySelectorAll("option");
    if(dOps.length)
        dOps.forEach(searchFun);
    
    function searchFun(elem) {
        let oData= JSON.parse(elem.text);        
        
        if (oData.id == dSel.value){
            console.log(oData.cliente);
            document.getElementById("id_update_factura").value= oData.id ;
            document.getElementById("nombre_update_factura").value= oData.cliente.nombre ;
            document.getElementById("apellido_update_factura").value= oData.cliente.apellido ;
            document.getElementById("fecha_update_factura").value= oData.fecha ;
            document.getElementById("iva_update_factura").value= oData.iva ;
            document.getElementById("total_update_factura").value= oData.total_con_iva;
            document.getElementById("total_iva_update_factura").value= oData.total_sin_iva;

        }
    } 
}

async function obtenerProductos(){
    const respuesta = await fetch(API_URL+"producto");
    const data = await respuesta.json();
    let dSel = document.getElementById("select_update_producto");
    let dOps =dSel.querySelectorAll("option");
    if (dOps.length)
        dOps.forEach(element => {
            element.remove();
        });
    let dOpt;
    data.forEach(element => {
        dOpt= document.createElement('option');
        dOpt.value=element.id;
        dOpt.textContent=JSON.stringify(element,null,2);
        dSel.appendChild(dOpt);
    });    
}

async function actualizarProducto(){
    let id= factor(document.getElementById("id_update_producto").value);
    try{
        if (checkNum(id,"id")) {
            let marca = factor(document.getElementById("marca_update_producto").value);
            let nombre = factor(document.getElementById("nombre_update_producto").value);
            let descripcion = factor(document.getElementById("descripcion_update_producto").value);
            let precio = factor(document.getElementById("precio_update_producto").value,"number");
            let stock = factor(document.getElementById("stock_update_producto").value,"number");

            let bool= checkString(marca) &&checkString(nombre) && checkString(descripcion) && checkNum(precio) && checkNum(stock);
            if (bool){
                const producto = {
                    marca:marca,
                    nombre:nombre,
                    descripcion:descripcion,
                    precio:precio,
                    stock:stock
                }
                console.log(producto);
                const respuesta = await fetch(  API_URL+'producto/'+id,
                                                {   method:'PUT',
                                                    headers: {'Content-Type': 'application/json'},
                                                    body:JSON.stringify(producto)
                                                }
                                            );
                                            console.log(respuesta);
                if(!respuesta.ok){
                    throw new Error("no se pudo modificar el Producto");
                }else{
                    document.getElementById("updateProductoResult").innerHTML = "Producto Modificado!!";
                }
            }
        }else
            throw new Error("Error formato indice head");
    }catch(error){
        document.getElementById("updateFacturaResult").innerHTML = "Producto NO SE PUDO MODIFICAR!! "+error.message;
    }
}

function actualizarDataProducto(){
    let dSel = document.getElementById("select_update_producto");
    let dOps=dSel.querySelectorAll("option");
    if(dOps.length)
        dOps.forEach(searchFun);
    
    function searchFun(elem) {
        let oData= JSON.parse(elem.text);        
        
        if (oData.id == dSel.value){
            console.log(oData);
            document.getElementById("id_update_producto").value= oData.id ;
            document.getElementById("nombre_update_producto").value= oData.nombre ;
            document.getElementById("marca_update_producto").value= oData.marca ;
            document.getElementById("descripcion_update_producto").value= oData.descripcion ;
            document.getElementById("precio_update_producto").value= oData.precio;
            document.getElementById("stock_update_producto").value= oData.stock;

        }
    } 
}