function crearTabla(array){
    var tabla=document.createElement('table');
    tabla.setAttribute('border','1px solid black');
    tabla.setAttribute('style','border-collapse: collapse');
    // tabla.setAttribute('Width','700px');

    let cabecera = document.createElement('tr');

    for(atriubuto in array[0]){
        let th= document.createElement('th');
        th.textContent = atriubuto;
        if(atriubuto != "active")
            cabecera.appendChild(th);
    }
    tabla.appendChild(cabecera);
    for(var i in array){
        var fila = document.createElement("tr");
        var unObjeto=array[i];
        for(j in unObjeto){
            if(unObjeto[j]==unObjeto["active"])
                continue;
            var celda= document.createElement('td');
            celda.setAttribute('style','text-align:center');
            var dato = document.createTextNode(unObjeto[j]);
            celda.appendChild(dato);
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    return tabla;
}