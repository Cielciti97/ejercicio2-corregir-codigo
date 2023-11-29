//Falta un punto en la declaración de variable, por sintaxis se pone para indicar fin de la linea
let formulario = document.querySelector("#form");


formulario.onsubmit = function(e) {
// se agrega Default para que peuda ser llamdo de nuevo
  e.preventDefault();

  //Los nombres de las variables sin dar contexto de lo que hacen o representan dificulta la legibilidad al momento de compartir tu código con la comunidad. Serán reemplazados por algunos que den más contexto de la aplicación.

  //El tipo de declaración en "var" no es muy recomendable de usar ya que son de ambito global y pueden reasignarse facilmente, provocando un fallo en nuestro codigo si hacemos mucho uso de "x" variable. Toma el ultimo valor de asignacion que se le de. POr ello se cambia a let para este caso.
  let nombreHTML = formulario.elements[0];
  let edadHTML = formulario.elements[1];
  let nacionalidadHTML = formulario.elements[2];
//Agregue punto y coma en ciertas líneas por convención.
  let nombre = nombreHTML.value;
  let edad = edadHTML.value;
//Agregue punto y coma en ciertas líneas por convención.
  let i = nacionalidadHTML.selectedIndex;
  let nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad);
  }
}

let botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
let corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  let lista = document.getElementById("lista-de-invitados");

  let elementoLista = document.createElement("div");
elementoLista.classList.added("elemento-lista");
lista.appendChild(elementoLista);

let spanNombre = document.createElement("span");
let inputNombre = document.createElement("input");
let espacio = document.createElement("br");
spanNombre.textContent = "Nombre: ";
inputNombre.value = nombre ;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);

function crearElemento(descripcion, valor) {
  let spanNombre = document.createElement("span");
  let inputNombre = document.createElement("input");
  let espacio = document.createElement("br");
spanNombre.textContent = descripcion + ": ";
inputNombre.value = valor ;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);


let botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
let corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}