window.addEventListener("load", requerimiento);
window.addEventListener("load", cargar);

function cargar() {
    var boton = document.getElementById("btnGuardar");
    boton.addEventListener("click", respuesta);
}

function borrar(e) {
    e.preventDefault();
    console.log(e);
    if (confirm("Desea borrar?"));
    e.target.parentNode.parentNode.innerHTML = "";
}

function editar(e) {
    e.preventDefault();
    var variable = document.getElementsByTagName("td")[0].innerHTML;
    console.log(variable);
}

function respuesta() {
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("surname").value;
    var fecha = document.getElementById("date").value;
    var telefono = document.getElementById("phone").value;
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        console.log("Llego la peticion", http.readyState);
        console.log(http.status);
        if (http.readyState === 4 && http.status === 200) {
            console.log("Tenemos la respuesta");
            console.log(http.response);
            alert("Ingreso con exito");
            if ((JSON.parse(http.responseText)).respuesta == "ok") {
                console.log( "callback"+miRespuesta);

                cargarDatos(JSON.parse(miRespuesta));
            }
        }
        else if (http.readyState === 4 && http.status === 200) {
            alert("Error de loggeo");
        }
    }
    http.open("POST", "http://localhost:3000/nuevaPersona");
    http.setRequestHeader("Content-Type", "application/json");
    var mijson = { "nombre": nombre, "apellido": apellido, "telefono": telefono, "fecha": fecha };
    var miRespuesta = JSON.stringify(mijson);
    http.send(miRespuesta);

}


function requerimiento() {
    console.log("requerimiento");
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
            cargarTabla(miobjetoJson);
        }
    }
    http.send();
}

function cargarTabla(lista) {
    for (var i = 0; i < lista.length; i++) {
        var objeto = lista[i];
        cargarDatos(objeto);
    }
}

function cargarDatos(obj) {
    var texto = "<tr>";
    texto += "<td>";
    texto += obj.nombre;
    texto += "</td>";
    texto += "<td>";
    texto += obj.apellido;
    texto += "</td>";
    texto += "<td>";
    texto += obj.fecha;
    texto += "</td>";
    texto += "<td>";
    texto += obj.telefono;
    texto += "</td>";
    texto += "<td>";
    texto += "<a href='#'' onclick='borrar(event)'>Borrar</a>";
    texto += "</td>";
    texto += "<td>";
    texto += "<a href='' onclick='editar(event)'>editar</a>";
    texto += "</td>";

    texto += "</tr>";

    document.getElementById("tabla").innerHTML += texto;
}