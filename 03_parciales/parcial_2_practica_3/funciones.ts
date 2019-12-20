namespace segundoParcial{

var vehiculos: Array<Vehiculo>=new Array<Vehiculo>();


export function Mostrar(){
    if($("#tipo").val()=="auto")
    {
        $("#autoDiv").show();
        $("#camionetaDiv").hide();
    }        
    else
    {
        $("#camionetaDiv").show();
        $("#autoDiv").hide();
    }
}

export function Agregar(){
$("#form").show();
}

export function calcularID(array:Array<Vehiculo>){
    if(array.length==0)
    return 1;
    else
    {    
    return array.reduce(function(alto, item){
        if(item.getId()>=alto)
        return item.getId()+1;
        }, 0);
    }
}

export function Sumar(){
    var id:number;
    
    id=calcularID(vehiculos);

    let modelo:string=(String)($("#txtModel").val());
    let marca=String($("#txtMarca").val());
    let precio=Number($("#numPrecio").val());

    

    if($("#tipo").val()=="auto")
    {
        let cp:number=(Number)($("#cantPuertas").val());
        let a:Auto=new Auto(cp, marca, modelo, precio, id);
        vehiculos.push(a);
    }else
    {
        let cp:boolean=(Boolean)($("#cuatroX").val());
        let a:Camioneta=new Camioneta(cp, marca, modelo, precio, id);
        vehiculos.push(a);
    }

    $("#form").hide();
    //$("#myForm").hide();
}


window.addEventListener("load",filtrado);

export function filtrado(){
    $("#filtro").keypress(function(){

        let marc:string=(String)($("#filtro").val());

        console.log(marc);
        let vehicM:Array<Vehiculo>;
        vehicM=vehiculos.filter(function(item){
            return item.getMarca().slice(0,marc.length)==marc;          
    });

    console.log(vehicM.length);
    CargarTabla2(vehicM);
})}

export function Calcular(){
    var total= vehiculos.reduce(function(tot, item){
        return tot+item.getPrecio();
      }, 0)
    
      let t:number= total/vehiculos.length;

      alert("Promedio= "+t);
}

export function CargarTabla(){
    CargarTabla2(vehiculos);
}



export function CargarTabla2(vehicZ:Array<Vehiculo>){
    let index=0;
    $("thead").remove();
    for(var i=0; i<vehiculos.length; i++)
    {
        $("#fila" + index).remove();
        index++;
    }

    var tabla=$("#tabla");

    var thead=document.createElement("thead");
    var tr=document.createElement("tr");
    
    tabla.append(thead);
    thead.appendChild(tr);

    var listaClaves=Object.keys(vehicZ[0]);

    listaClaves.forEach(function(clave){
        var texto=document.createTextNode(clave);
        var th=document.createElement("th");
        th.appendChild(texto);
        tr.appendChild(th);
      });

      var tBody=document.createElement("tbody");
      tabla.append(tBody);


      vehicZ.forEach(function(objeto){
        var tr=document.createElement("tr");
        var listaClaves2=Object.keys(objeto);
        tBody.appendChild(tr);
        let n=vehicZ.indexOf(objeto);

        tr.setAttribute("id", "fila"+n);
        listaClaves2.forEach(function(clave){
          var texto=document.createTextNode(objeto[clave]);
          var td=document.createElement("td");
          td.appendChild(texto);
          tr.appendChild(td);
        })

  });
}

}