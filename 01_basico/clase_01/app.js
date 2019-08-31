window.addEventListener("load",Cargar);
function Cargar(){
    var botonSumar= document.getElementById("btnSumar");
    botonSumar.addEventListener("click",Sumar);

    var botonSumarYGuardar= document.getElementById("btnSumarYGuardar");
    botonSumarYGuardar.addEventListener("click",SumarYGuardar);
}

function Sumar(){
    var numero1=document.getElementById("numeroUno").value;
    var numero2=document.getElementById("numeroDos").value;

    var resultado=parseInt(numero1)+parseInt(numero2);
    document.getElementById("resultado").value=resultado;
}

function SumarYGuardar(){
    Sumar();
    var texto="<tr>";
    texto+="<td>";
    texto+=document.getElementById("numeroUno").value;
    texto+="</td>";
    texto+="<td>";
    texto+=document.getElementById("numeroDos").value;
    texto+="</td>";
    texto+="<td>";
    texto+=document.getElementById("resultado").value;
    texto+="</td>";
    texto+="</tr>";

    document.getElementById("tabla").innerHTML+=texto;
}