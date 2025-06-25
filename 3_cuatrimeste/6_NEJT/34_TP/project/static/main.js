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
    const id = document.getElementById("inputDeleteId").value;
    try{
        const respuesta = await fetch(API_URL + "cliente/" + id,
            {method:'DELETE'});
            if(!respuesta.ok){
                throw new Error("no se pudo eliminar al cliente");
            }
            const data = await respuesta.json();
            document.getElementById("deleteResult").innerHTML = "Cliente eliminado";
    }catch(error){
        console.log(error.message + " no se pudo eliminar el cliente");
    };
}


async function crearCliente(){
    const cliente = {
        nombre: document.getElementById("nombre").value,
        apellido:document.getElementById("apellido").value,
        direccion:document.getElementById("direccion").value,
        activo:document.getElementById("activo").value
    }

    try{
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
        }
        catch(error){
             document.getElementById("createResult").innerHTML = "Cliente NO SE PUDO CREAR!! "+error.message;
        }
}

async function actualizarCliente(){
    let id= document.getElementById("id_update").value;
    if (id!=undefined) {
        
        const cliente = {        
            nombre: document.getElementById("nombre_update").value,
            apellido:document.getElementById("apellido_update").value,
            direccion:document.getElementById("direccion_update").value,
            activo:document.getElementById("activo_update").value
        }
    
        try{
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
        }catch(error){
            document.getElementById("updateResult").innerHTML = "Cliente NO SE PUDO MODIFICAR!! "+error.message;
        }
    }else
        document.getElementById("updateResult").innerHTML = "Cliente NO SE PUDO MODIFICAR!! "+error.message;

}


function actualizarDataCliente(){
    let dSel = document.getElementById("select_update");
    let dOps=dSel.querySelectorAll("option");
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


async function actualizarFactura(){
    let id= document.getElementById("id_update_factura").value;
    if (id!=undefined) {
        
        const factura = {        
            nombre: document.getElementById("nombre_update_factura").value,
            apellido:document.getElementById("apellido_update_factura").value,
            direccion:document.getElementById("direccion_update_factura").value,
            activo:document.getElementById("activo_update_factura").value
        }
    
        try{
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
        }catch(error){
            document.getElementById("updateFacturaResult").innerHTML = "Factura NO SE PUDO MODIFICAR!! "+error.message;
        }
    }else
        document.getElementById("updateFacturaResult").innerHTML = "Factura NO SE PUDO MODIFICAR!! "+error.message;

}

function actualizarDataFactura(){
    let dSel = document.getElementById("select_update_factura");
    let dOps=dSel.querySelectorAll("option");
    if(dOps.length)
        dOps.forEach(searchFun);
    
    function searchFun(elem) {
        let oData= JSON.parse(elem.text);        
        
        //console.log(oData);
        if (oData.id == dSel.value){
            document.getElementById("id_update_factura").value= oData.id ;
            document.getElementById("nombre_update_factura").value= oData.nombre ;
            document.getElementById("apellido_update_factura").value= oData.apellido ;
            document.getElementById("direccion_update_factura").value= oData.direccion ;
            document.getElementById("activo_update_factura").value= oData.activo;
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
    let id= document.getElementById("id_update_producto").value;
    if (id!=undefined) {
        
        const producto = {        
            nombre: document.getElementById("nombre_update_producto").value,
            apellido:document.getElementById("apellido_update_producto").value,
            direccion:document.getElementById("direccion_update_producto").value,
            activo:document.getElementById("activo_update_producto").value
        }
    
        try{
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
        }catch(error){
            document.getElementById("updateProductoResult").innerHTML = "Producto NO SE PUDO MODIFICAR!! "+error.message;
        }
    }else
        document.getElementById("updateProductoResult").innerHTML = "Producto NO SE PUDO MODIFICAR!! "+error.message;

}

function actualizarDataProducto(){
    let dSel = document.getElementById("select_update_producto");
    let dOps=dSel.querySelectorAll("option");
    if(dOps.length)
        dOps.forEach(searchFun);
    
    function searchFun(elem) {
        let oData= JSON.parse(elem.text);        
        
        //console.log(oData);
        if (oData.id == dSel.value){
            document.getElementById("id_update_producto").value= oData.id ;
            document.getElementById("nombre_update_producto").value= oData.nombre ;
            document.getElementById("apellido_update_producto").value= oData.apellido ;
            document.getElementById("direccion_update_producto").value= oData.direccion ;
            document.getElementById("activo_update_producto").value= oData.activo;
        }
    } 
}