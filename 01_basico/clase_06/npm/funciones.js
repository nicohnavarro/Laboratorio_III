//npm(Node Packet Manager)
// escribir en consola 
// > npm init -y
// > npm install jquery --save
// --save Guarda las dependencias en el archivo package.json (despues hago npm install y baja todas las dependencias)
//window.addEventListener("load",MostrarParrafoConJs);
//window.addEventListener("load",MostrarParrafoConJQuery);
//$(document).ready(funcion) reemplaza al window.addeventlistener("load",funcion);
$(document).ready(MostrarParrafoConJQuery);

function MostrarParrafoConJs()
{
    console.log(document.getElementById("parrafo").innerText);
}

function MostrarParrafoConJQuery()
{
    //Un nombre de tag me devuelve todos los elementos con ese tag
    console.log("Elementos tag boton");
    console.log($("button"));
    //Con # busco un id
    console.log("Elemento ID parrafo");
    console.log($("#parrafo"));
    //Con . busco los elementos con una clase
    console.log("Elementos clase clase");
    console.log($(".clase"));



    //La funcion html() devuelve el innerHtml del elemento
    console.log($("#parrafo").html());
    //La funciont html(string) setea el string al innerHtml al elemento
    console.log($("#parrafo").html("asdasda"));

    //Para setear un evento hago elemento.nombreDelEvento(funcion a ejecutar);
    $("#btn1").click(Saludar);
    $("#btn2").click(Saludar2);
    $("#btn3").click(SetearPlaceholder);
}

function Saludar()
{
    alert("Hola");
}
function Saludar2()
{
    //Para recuperar el value de un input 
    console.log($("#txt").val());
    //Para setear el value:
    console.log($("#txt").val("ASDASDAS"));
}

function SetearPlaceholder()
{
    //Para conseguir el valor de un atributo uso:
    alert($("#txt").attr("placeholder"));
    //Para poner atributos uso: 
    $("#txt").attr("placeholder","LALALA");
}

// Para ejecutar peticioes get o post con ajax https://www.w3schools.com/jquery/jquery_ajax_get_post.asp

//GET
$("#btn").click(function(){
    $.get("localhost:3000/personas", function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  });

//POST

  $("button").click(function(){
    $.post("localhost:3000/personas",
    {
      nombre: "Donald Duck",
      apellido: "Duckburg",
      sexo: "female",
      id: 1
    },
    function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  });