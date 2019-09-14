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
            texto += name.value;
            texto += "</td>";
            texto += "<td>";
            texto += surname.value;
            texto += "</td>";
            texto += "<td>";
            texto += "<a href='#'' onclick='borrar(event)'>Borrar</a>";
            texto += "</td>";
            texto += "<td>";
            texto += "<a href='' onclick='editar(event)'>editar</a>";
            texto += "</td>";
            
            texto += "</tr>";

            document.getElementById("tabla").innerHTML += texto;
            //document.getElementById("name").value="";
            //document.getElementById("surname").value="";
        }
    }

}

function borrar(e){
    e.preventDefault();
    console.log(e);
    if(confirm("Desea borrar?"));
    e.target.parentNode.parentNode.innerHTML="";
}

function editar(e){
    e.preventDefault();
    var variable=document.getElementsByTagName("td")[0].innerHTML;
    console.log(variable);
}