window.addEventListener("load", hacerTabla2);

/*
https://www.anerbarrena.com/jquery-selectors-selectores-4768/
*/

function crearTabla(array) {
  var tabla = document.createElement('table');
  tabla.setAttribute('border', '1px solid black');
  tabla.setAttribute('style', 'border-collapse: collapse');
  // tabla.setAttribute('Width','700px');

  let cabecera = document.createElement('tr');

  for (atriubuto in array[0]) {
    let th = document.createElement('th');
    th.textContent = atriubuto;
    if (atriubuto != "active")
      cabecera.appendChild(th);
  }
  tabla.appendChild(cabecera);
  for (var i in array) {
    var fila = document.createElement("tr");
    var unObjeto = array[i];
    for (j in unObjeto) {
      if (unObjeto[j] == unObjeto["active"])
        continue;
      var celda = document.createElement('td');
      celda.setAttribute('style', 'text-align:center');
      var dato = document.createTextNode(unObjeto[j]);
      celda.appendChild(dato);
      fila.appendChild(celda);
    }
    tabla.appendChild(fila);
  }
  return tabla;
}

function hacerTabla2() {


  $("#form").css("visibility", "hidden");
  $(".spinner").css("display", "none");

  $.get("http://localhost:3000/materias", function (data, status) {

    var n = 3;
    if (status == "success") {
      var tabla = document.createElement("table");
      $("#body").append(tabla);
      var thead = document.createElement("thead");
      $("table").append(thead);
      var tr = document.createElement("tr");
      $("thead").append(tr);
      var thId = document.createElement("th");
      var thN = document.createElement("th");
      var thA = document.createElement("th");
      var thL = document.createElement("th");
      var thS = document.createElement("th");
      $("tr").append(thId);
      $("tr").append(thN);
      $("tr").append(thA);
      $("tr").append(thL);
      $("tr").append(thS);

      $("tr>th:nth-child(1)").html("Id");
      $("tr>th:nth-child(2)").html("Nombre");
      $("tr>th:nth-child(3)").html("Cuatrimestre");
      $("tr>th:nth-child(4)").html("Fecha Final");
      $("tr>th:nth-child(5)").html("Turno");

      var n = 2;

      data.forEach(function (objeto) {

        var trO = document.createElement("tr");
        $("thead").append(trO);
        var tdId = document.createElement("td");
        var tdN = document.createElement("td");
        var tdA = document.createElement("td");
        var tdL = document.createElement("td");
        var tdS = document.createElement("td");
        $("tr").append(tdId);
        $("tr").append(tdN);
        $("tr").append(tdA);
        $("tr").append(tdL);
        $("tr").append(tdS);
        $("thead>tr:nth-child(" + n + ")").attr("id", objeto["id"]);

        $("#" + objeto['id'] + ">td:nth-child(1)").html(objeto['id']);
        $("#" + objeto['id'] + ">td:nth-child(2)").html(objeto['nombre']);
        $("#" + objeto['id'] + ">td:nth-child(3)").html(objeto['cuatrimestre']);
        $("#" + objeto['id'] + ">td:nth-child(4)").html(objeto['fechaFinal']);
        $("#" + objeto['id'] + ">td:nth-child(5)").html(objeto['turno']);

        $("#" + objeto['id'] + ">td:nth-child(1)").attr("id", objeto["id"]);
        $("#" + objeto['id'] + ">td:nth-child(2)").attr("id", objeto["id"]);
        $("#" + objeto['id'] + ">td:nth-child(3)").attr("id", objeto["id"]);
        $("#" + objeto['id'] + ">td:nth-child(4)").attr("id", objeto["id"]);
        $("#" + objeto['id'] + ">td:nth-child(5)").attr("id", objeto["id"]);
        n++;
        trO.addEventListener("dblclick", mostrar);

      });
    }

  });
}

function modificarPost() {

  var nom = $("#txtNom").val();
  var cuatri = $("#cuatrimestre").val();
  var idV = $("#lblId").html();
  var fecha=$('#fechaFinal').val();
  var tur = $('input[name=radio]:checked', '#myForm').val();
  var cuatri = $("#cuatrimestre option:selected").html();
  console.log(stringToDate(fecha,'dd/MM/YYYY','/'));

  if (nom.length > 6 && tur != null && fecha) {
    $(".spinner").css("display", "block");
    console.log({
      id: idV
    });

    $.post("http://localhost:3000/editar",
      {
        id: idV,
        nombre: nom,
        cuatrimestre: cuatri,
        fechaFinal: fecha,
        turno: tur
      }, function (data, status) {
        console.log("Data: " + data + "\nStatus: " + status);

        if (status == "success") {


          $("#form").hide();//oculto el form con jquery
          $(".spinner").css("display", "none");



          $("#" + idV + ">td:nth-child(1)").html(idV);
          $("#" + idV + ">td:nth-child(2)").html(nom);
          $("#" + idV + ">td:nth-child(3)").html(cuatri);
          $("#" + idV + ">td:nth-child(4)").html(fecha);
          $("#" + idV + ">td:nth-child(5)").html(tur);
        }
      }

    )

  }
  else {
    if (!(nom.length > 6)) {
      $("#txtNom").css("border", "0.5rem red solid");
    }
  }
}


function mostrar(evento) {
  document.getElementById("form").style.visibility = "visible";
  $("#form").css("display", "block");

  var id = evento.target.getAttribute("id");

  var turno = $("tr[id='" + id + "']>td:nth-child(5)").html();
  var fechaFinal = $("tr[id='" + id + "']>td:nth-child(4)").html();
  console.log(fechaFinal);
  console.log()
  $("#txtNom").val($("tr[id='" + id + "']>td:nth-child(2)").html());
  $("#cuatrimestre").val($("tr[id='" + id + "']>td:nth-child(3)").html());
  $('#fechaFinal').val(fechaFinal);



  if (turno == "Mañana") {
    $("#man").prop('checked', true);
  }
  else
    $("#noc").prop('checked', true);


  $("#lblId").html(id);


  $("#btnM").click(modificarPost);
  $("#btnE").click(eliminarPost);
}

function eliminarPost() {
  var idV = $("#lblId").html();

    $.post("http://localhost:3000/eliminar",
      {
        id: idV
      }, function (data, status) {
        console.log("Data: " + data + "\nStatus: " + status);

        if (status == "success") {


          $("#form").hide();//oculto el form con jquery
          $(".spinner").css("display", "none");

          $('#'+idV).remove();
        }
      }

    )
  }



  function stringToDate(_date,_format,_delimiter)
  {
              var formatLowerCase=_format.toLowerCase();
              var formatItems=formatLowerCase.split(_delimiter);
              var dateItems=_date.split(_delimiter);
              var monthIndex=formatItems.indexOf("mm");
              var dayIndex=formatItems.indexOf("dd");
              var yearIndex=formatItems.indexOf("yyyy");
              var month=parseInt(dateItems[monthIndex]);
              month-=1;
              var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
              return formatedDate;
  }



