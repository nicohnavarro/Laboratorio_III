window.addEventListener("load",hacerTabla2);

/*
https://www.anerbarrena.com/jquery-selectors-selectores-4768/
*/

function hacerTabla2(){
  
  
  $("#form").css("visibility", "hidden");
  $(".spinner").css("display", "none");

  $.get("http://localhost:3000/personas",function(data, status){

    var n=3;
      if(status=="success")
      {             
        var tabla=document.createElement("table");
        $("#body").append(tabla);
        var thead=document.createElement("thead");
        $("table").append(thead);
        var tr=document.createElement("tr");
        $("thead").append(tr);

        var thN=document.createElement("th");
        var thA=document.createElement("th");
        var thL=document.createElement("th");
        var thS=document.createElement("th");

        $("tr").append(thN);
        $("tr").append(thA);
        $("tr").append(thL);
        $("tr").append(thS);

        $("tr>th:nth-child(1)").html("Nombre");
        $("tr>th:nth-child(2)").html("Apellido");
        $("tr>th:nth-child(3)").html("Localidad");
        $("tr>th:nth-child(4)").html("Sexo");

        var n=2;

        data.forEach(function(objeto){
          
          var trO=document.createElement("tr"); 
          $("thead").append(trO);
          var tdN=document.createElement("td");
          var tdA=document.createElement("td");
          var tdL=document.createElement("td");
          var tdS=document.createElement("td");      
          $("tr").append(tdN); 
          $("tr").append(tdA);
          $("tr").append(tdL);
          $("tr").append(tdS);   
          $("thead>tr:nth-child("+n+")").attr("id", objeto["id"]);

          $("#"+objeto['id']+">td:nth-child(1)").html(objeto['nombre']);
        $("#"+objeto['id']+">td:nth-child(2)").html(objeto['apellido']);
        $("#"+objeto['id']+">td:nth-child(3)").html(objeto['localidad']['nombre']);
        $("#"+objeto['id']+">td:nth-child(4)").html(objeto['sexo']);

        $("#"+objeto['id']+">td:nth-child(1)").attr("id", objeto["id"]);
        $("#"+objeto['id']+">td:nth-child(2)").attr("id", objeto["id"]);
        $("#"+objeto['id']+">td:nth-child(3)").attr("id", objeto["id"]);
        $("#"+objeto['id']+">td:nth-child(4)").attr("id", objeto["id"]);
        n++;         
          trO.addEventListener("dblclick", mostrar);
          
         });
         }
  
    });
}

    function modificarPost(){

      var nom=$("#txtNom").val();
      var ape=$("#txtApe").val();
      var idV=$("#lblId").html();

      var sex=$('input[name=radio]:checked', '#myForm').val();      
      idLoc=$("#loc option:selected").val();
      nomLoc=$("#loc option:selected").html();
      console.log(idLoc);
      console.log(nomLoc);
      console.log(idV);

      if(ape.length>3 && nom.length>3 && sex != null)
      {
        $(".spinner").css("display", "block");
        console.log( {id: idV,
          apellido: ape,
          nombre: nom,
          sexo: sex,
          localidad:{id:idLoc,nombre:nomLoc}});
        
        $.post("http://localhost:3000/editar",
        {
          id: idV,
          apellido: ape,
          nombre: nom,
          sexo: sex,
          localidad:{id:idLoc,nombre:nomLoc}
        },function(data, status){
          console.log("Data: " + data + "\nStatus: " + status);

          if(status=="success")
          {                  
            

            $("#form").hide();//oculto el form con jquery
            $(".spinner").css("display", "none");           
           
            

            $("#"+idV+">td:nth-child(1)").html(nom);
           $("#"+idV+">td:nth-child(2)").html(ape);
           $("#"+idV+">td:nth-child(3)").html(nomLoc);
           $("#"+idV+">td:nth-child(4)").html(sex);
           

            
          }
          

        }

        )
       
      }
      else
      {
        if(!(ape.length>3))
        {
          $("#txtApe").css("border","0.5rem red solid");
        }
        else
        $("#txtNom").css("border","0.5rem red solid");
      }
    }
    
  
  function mostrar(evento){
    document.getElementById("form").style.visibility="visible"; 
    $("#form").css("display", "block");
    
    var id=evento.target.getAttribute("id");
    
    var sexo=$("tr[id='"+id+"']>td:nth-child(4)").html();

    $("#txtNom").val($("tr[id='"+id+"']>td:nth-child(1)").html());
    $("#txtApe").val($("tr[id='"+id+"']>td:nth-child(2)").html());
   
    console.log(sexo);

    if(sexo=="Female")
   {
    $("#fem").prop('checked',true);
   }
   else
   $("#mas").prop('checked',true);    

    
   $("#lblId").html(id);
   
   
   $("#btnM").click(modificarPost);

   
   $.get("http://localhost:3000/provincias",function(data, status){

    $(".spinner").css("display", "block");
      if(status=="success")
      {             
        var m=1;
        $(".spinner").css("display", "none");

        $("#pro").empty();
        data.forEach(function(objeto){
          var op=document.createElement("option");
          $("#pro").append(op);
          $("#pro>option:nth-child("+m+")").html(objeto['nombre']);
          $("#pro>option:nth-child("+m+")").attr("id",objeto['id']);
          $("#pro>option:nth-child("+m+")").attr("value",objeto['id']);
          m++;
         });
         }
  
    });
   
    
}



function cargarL(evento){
  
  $("#loc").empty();
  console.log(evento.target);
  idProv=$("#pro option:selected").val();
  $.get("http://localhost:3000/localidades?idProv="+idProv,function(data, status){

    $(".spinner").css("display", "block");
    
    if(status=="success")
    {         
      $(".spinner").css("display", "none");
      var s=1;

      data.forEach(function(objeto){
        var op=document.createElement("option");
        
        $("#loc").append(op);
        $("#loc>option:nth-child("+s+")").html(objeto['nombre']);
        $("#loc>option:nth-child("+s+")").attr("value",objeto['id']);
        s++;
       });
       }

  });
}




