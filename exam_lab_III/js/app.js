
var botonEliminar;
var botonModificar;

function Persona(id,nombre,apellido,sexo){
    this.id=id;
    this.nombre=nombre;
    this.apellido=apellido;
    this.sexo=sexo;
}
function modificar(e){
    console.log("vamos a modificar");
    var nombre=e.target.childNodes();
    console.log(nombre);
}
function obtenerPersona(frm) {
    let nombre;
    let apellido;
    let sexo;
    let id;

    for (elements of frm.elements) {
        switch (elements.name) {
            case "Nombre":
                nombre = elements.value;
                break;
            case "Apellido":
                apellido = elements.value;
                break;
            case "sexo":
                sexo = elements.value;
                break;
            case "id":
                if (parseInt(elements.value) != -1)
                    id = parseInt(elements.value);
        }
    }
    return new Persona(id,nombre,apellido,sexo);
}

//Cuando se carga la paguina llama a inicializarManejadores
window.addEventListener('load', inicializarManejadores, false);
function inicializarManejadores() {
    traerCards();
    botonEliminar = document.getElementById('btnEliminar');
    botonModificar = document.getElementById('btnModificar');

    botonModificar.addEventListener('click',modificar);

    botonEliminar.addEventListener('click', function () {
        let nuevoAnuncio = obtenerAnuncio(frm);
        BajaAnuncio(nuevoAnuncio);
        botonModificar.className = 'boton boton-verde oculto';
        botonCancelar.className = 'boton boton-amarillo oculto';
        botonEliminar.className = 'boton boton-rojo oculto';
        CancelarAnuncios(frm);
    })

}

function crearCard(array){
    var card=document.createElement('div');
    card.setAttribute('border','1px solid black');
    card.setAttribute('style','border-collapse:collapse');
}

function traerCards() {
    console.log("traerCards");
    var http = new XMLHttpRequest();
    http.open("GET", "http://localhost:3000/personas", true);
    http.onreadystatechange = function () {
        console.log("Llego la peticion", http.readyState);
        console.log(http.status);
        if (http.readyState === 4 && http.status === 200) {
            console.log(http.response);
            alert("Ingreso con exito");
            var miobjetoJson = JSON.parse(http.response);
            console.log(miobjetoJson);
            cargarCards(miobjetoJson);
        }
    }
    http.send();
}

function cargarCards(lista) {
    for (var i = 0; i < lista.length; i++) {
        var objeto = lista[i];
        cargarDatos(objeto);
    }
}

function cargarDatos(obj){
    var miDiv=document.getElementById('espacio');
    var card=document.createElement('div');
    card.className+= 'card';
    card.setAttribute('onclick','editar(event)');
    var divImagen=document.createElement('div');
    divImagen.className+='imagen';

    var imagen=document.createElement('img');
    imagen.setAttribute('src','../images/user.png');
    divImagen.appendChild(imagen);

    var nombre=document.createElement('span');
    nombre.setAttribute('id','nombre');
    var txtnombre=document.createTextNode(obj['nombre']);
    nombre.appendChild(txtnombre);

    var apellido=document.createElement('span');
    apellido.setAttribute('id','apellido');
    var txtapellido=document.createTextNode(obj['apellido']);
    apellido.appendChild(txtapellido);

    var sexo=document.createElement('span');
    sexo.setAttribute('id','sexo');
    var txtsexo=document.createTextNode(obj['sexo']);
    sexo.appendChild(txtsexo);

    card.appendChild(divImagen);
    card.appendChild(nombre);
    card.appendChild(apellido);
    card.appendChild(sexo);
    
    miDiv.appendChild(card);
}

function editar(e){
    console.log(e);
    var form=document.getElementById('form');
    form.hidden=false;
}