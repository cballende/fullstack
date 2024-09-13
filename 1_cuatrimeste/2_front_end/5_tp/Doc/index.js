let btn = document.getElementById("btn-enviar");

let inputEmail = document.getElementById("input-email");

let inputConsulta = document.getElementById("input-consulta");

btn.addEventListener("click",function(e){ 
    ultimHijo.classList.remove("colorRojo");
  //  console.log("el boton fue clickeado");
  //  console.log(e);
  //  console.log(e.target);
    verificarFormulario(inputEmail,inputConsulta);
});


function verificarFormulario(email,consulta){
 if(!emailValido(email.value)){
 
    alert("debe ingresar un email valido");
 
    }else{
        alert("su consulta fue enviada correctamente");
        console.log(consulta.value);
    }
 }



function emailValido(emailIngresado){
    console.log(emailIngresado);
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(emailIngresado);
}



let items = document.querySelectorAll(".elementoDeLista");
//console.log(items);

//console.log(items[1]);

let parrafos = document.querySelectorAll("p");
console.log(parrafos);

parrafos[1].innerHTML = 'Parrafo Cambiado';

let arregloDeDivs = document.querySelectorAll('div');
//console.log(arregloDeDivs);
//console.log(arregloDeDivs[4]);


let padre = document.getElementById("padre");

let hijos = padre.children;
//console.log(hijos);

console.log(hijos[1]);

let primerHijo = padre.firstChild;
console.log("primer hijo, " + primerHijo.textContent);



let ultimHijo = padre.lastElementChild;
//console.log("ultimo hijo, " + ultimHijo.textContent);
ultimHijo.classList.add("colorRojo");


let nuevoDiv = document.createElement('div');
let nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = 'soy un parrafo creado dinamicamente';
nuevoDiv.appendChild(nuevoParrafo);

//nuevoDiv.textContent = 'este es un nuevo div creado de manera dinamica';
nuevoDiv.classList.add("nuevoDiv");

let body = document.getElementById("body");
body.appendChild(nuevoDiv);