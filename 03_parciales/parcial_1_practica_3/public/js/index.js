var botonAlta;
var botonEliminar;
var botonModificar;
var botonCancelar;
var divTabla;


//Cuando se carga la paguina llama a inicializarManejadores
window.addEventListener('load', inicializarManejadores, false);

function inicializarManejadores() {
    let frm = document.forms[0];
    divTabla = document.getElementById("divTabla");
    botonAlta = document.getElementById('btnAlta');
    botonEliminar = document.getElementById('btnEliminar');
    botonModificar = document.getElementById('btnModificar');
    botonCancelar = document.getElementById('btnCancelar');
    ArmarTabla();
    frm.addEventListener('submit', function (e) {
        e.preventDefault();
    })
    botonAlta.addEventListener('click', function (e) {
        let nuevoAnuncio = obtenerAnuncio(frm);
        AltaAnuncio(nuevoAnuncio);
    })
    botonCancelar.addEventListener('click', function (e) {
        CancelarAnuncios(frm);
        botonModificar.className = 'boton boton-verde oculto';
        botonCancelar.className = 'boton boton-amarillo oculto';
        botonEliminar.className = 'boton boton-rojo oculto';
    })
    botonEliminar.addEventListener('click', function () {
        let nuevoAnuncio = obtenerAnuncio(frm);
        BajaAnuncio(nuevoAnuncio);
        botonModificar.className = 'boton boton-verde oculto';
        botonCancelar.className = 'boton boton-amarillo oculto';
        botonEliminar.className = 'boton boton-rojo oculto';
        CancelarAnuncios(frm);
    })
    botonModificar.addEventListener('click',function(){
        let nuevoAnuncio= obtenerAnuncio(frm);
        ModificarAnuncio(nuevoAnuncio);
        botonModificar.className = 'boton boton-verde oculto';
        botonCancelar.className = 'boton boton-amarillo oculto';
        botonEliminar.className = 'boton boton-rojo oculto';
        CancelarAnuncios(frm);
    })


}

function obtenerAnuncio(frm) {
    let titulo;
    let transaccion;
    let descripcion;
    let precio;
    let num_wc;
    let num_estacionamiento;
    let num_dormitorio;
    let id;

    for (elements of frm.elements) {
        switch (elements.name) {
            case "Titulo":
                titulo = elements.value;
                break;
            case "Transaccion":
                transaccion = elements.value;
                break;
            case "Descripcion":
                descripcion = elements.value;
                break;
            case "Precio":
                precio = elements.value;
                break;
            case "wc":
                num_wc = parseInt(elements.value);
                break;
            case "estacionamientos":
                num_estacionamiento = parseInt(elements.value);
                break;
            case "dormitorios":
                num_dormitorio = parseInt(elements.value);
                break;
            case "id":
                if (parseInt(elements.value) != -1)
                    id = parseInt(elements.value);
        }
    }
    return new Anuncio(id, titulo, transaccion, descripcion, precio, num_wc, num_estacionamiento, num_dormitorio);
}
function CargarForm(frm, Anuncio) {
    for (elements of frm.elements) {
        switch (elements.name) {
            case "id":
                elements.value = Anuncio.id;
                break;
            case "Titulo":
                elements.value = Anuncio.titulo;
                break;
            case "Transaccion":
                elements.value = Anuncio.transaccion;
                break;
            case "Descripcion":
                elements.value = Anuncio.descripcion;
                break;
            case "Precio":
                elements.value = Anuncio.precio;
                break;
            case "wc":
                elements.value = Anuncio.num_wc;
                break;
            case "estacionamientos":
                elements.value = Anuncio.num_estacionamiento;
                break;
            case "dormitorios":
                elements.value = Anuncio.num_dormitorio;
                break;
        }
    }
}
function CancelarAnuncios(frm) {
    for (elements of frm.elements) {
        switch (elements.name) {
            case "Titulo":
                elements.value = "";
                break;
            case "Transaccion":
                elements.value = "";
                break;
            case "Descripcion":
                elements.value = "";
                break;
            case "Precio":
                elements.value = "";
                break;
            case "wc":
                elements.value = "";
                break;
            case "estacionamientos":
                elements.value = "";
                break;
            case "dormitorios":
                elements.value = "";
                break;
        }
    }
}
function Spinner() {
    var spinner = document.createElement('img');
    spinner.setAttribute('src', './img/831.gif');
    spinner.setAttribute('alt', 'spinner');
    return spinner;
}