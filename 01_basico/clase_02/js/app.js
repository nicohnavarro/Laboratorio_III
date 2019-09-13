window.addEventListener("load", Cargar);

function Cargar() {
    var botonGuardar = document.getElementById("btnGuardar");
    botonGuardar.addEventListener("click", Agregar);
}

function Agregar() {
    var name = document.getElementById("name");
    var surname = document.getElementById("surname");

    if (name.value == "" || surname.value == "") {
        name.className += "isError";
        surname.className += "isError";
    }

    else {
        if (confirm("Desea Agregar una persona? ")) {
            var texto = "<tr>";
            texto += "<td>";
            texto += name;
            texto += "</td>";
            texto += "<td>";
            texto += surname;
            texto += "</td>";
            texto += "<td>";
            texto += "<a href='#'' onclick='borrar(event)'>Borrar</a>";
            texto += "</td>";
            texto += "</tr>";

            document.getElementById("tabla").innerHTML += texto;
        }
    }

}

function borrar(e){
    e.preventDefault();
    console.log(e.target.parentNode.parentNode);
    if(confirm("Desea borrar?"));
    e.target.parentNode.parentNode.innerHTML="";
}