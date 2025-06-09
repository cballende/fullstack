let p = document.createElement("p");
p.textContent = "Consultando API...";
document.body.appendChild(p);
//let lista = document.getElementById("tracks-list");

//llamada a la API de nest
async function fetchSaludo(){
    try{
        let respuesta = await fetch('http://localhost:3000/API');
        let data = respuesta.text();
        console.log(data);
        p.textContent = "La api dice " + data.value;
    }catch(error){
        console.log(error);
    };
}

//
async function fetchCanciones() {
    try {
        let canciones = await fetch('http://localhost:3000/API/tracks');
        let datosDeCanciones = await canciones.json(); // CORREGIDO
        console.log(datosDeCanciones);
        renderizar(datosDeCanciones);
    } catch (error) {
        console.log(error);
    }
}
function renderizar(parametroCanciones) {
    console.log("llamo a renderizar");
    const lista = document.getElementById("tracks-list"); // CORREGIDO
    for (let i = 0; i < parametroCanciones.length; i++) { // CORREGIDO
        console.log(parametroCanciones[i]);
        let li = document.createElement("li");
        li.textContent = parametroCanciones[i].title; // CORREGIDO
        lista.appendChild(li);
    }
}

fetchCanciones();

//fetchCanciones();
