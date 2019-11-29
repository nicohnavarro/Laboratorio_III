$(document).ready(mostrarPersonas);

function mostrarPersonas(){
  $.get("http://localhost:3000/personas", function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
      cargarDatos(data);
    });
}


function cargarDatos(data){
  var DatosJson = data;
  console.log(DatosJson);
  var string="this.style.backgroundColor = 'red'"
  $("#Table").append('<tr><td>Nombre</td>'+
  '<td>Apellido </td>' +
  '<td>Localidad</td>'+
  '<td>Sexo</td>');
  for (i = 0; i < DatosJson.length; i++){

$("#Table").append('<tr  onclick="red">' +
  '<td class="selected" align="center" style="dislay: none;">' + DatosJson[i].nombre + '</td>'+
  '<td align="center" style="dislay: none;">' + DatosJson[i].apellido + '</td>'+
  '<td align="center" style="dislay: none;">' + DatosJson[i].localidad['nombre'] + '</td>'+
  '<td align="center" style="dislay: none;">' + DatosJson[i].sexo + '</td>'+'</tr>');
  }
}

$("#fila").click(function(){
  alert("fila");
  $.get("localhost:3000/personas", function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
});

var table = document.getElementById('Table'),
  selected = table.getElementsByClassName('selected');
table.onclick = highlight;

function highlight(e) {
    if (selected[0]) selected[0].className = '';
    e.target.parentNode.className = 'selected';
}

function fnselect(){
var $row=$(this).parent().find('td');
    var clickeedID=$row.eq(0).text();
    alert(clickeedID);
}


