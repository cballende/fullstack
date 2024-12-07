 
let body = document.getElementsByTagName("body")[0];

let newH = document.createElement('header');
let newM = document.createElement('main');
let newD1 = document.createElement('div');
let newD2 = document.createElement('div');
let newF = document.createElement('footer');

newM.classList.add("flex-container");
newH.classList.add("nuevoHeader");
newF.classList.add("nuevoFooter");
newH.style.textAlign = "center";
newF.style.textAlign = "center";


newH.textContent = 'Nuevo Header creado de manera dinámica';
newD1.classList.add("nuevoDiv");
newD1.style.height="300px";

newD2.classList.add("nuevoDiv");
newD2.style.height="300px";

newD1.textContent = 'Nuevo Div numero 1 creado de manera dinámica';
newD2.textContent = 'Nuevo Div numero 2 creado de manera dinámica';
newF.textContent  = 'Nuevo Footer creado de manera dinámica';

body.appendChild(newH);
newM.appendChild(newD1);
newM.appendChild(newD2);
body.appendChild(newM);
body.appendChild(newF);