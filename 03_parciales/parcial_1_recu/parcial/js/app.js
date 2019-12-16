window.addEventListener('load', requestApi);

function cargarTabla(listObj) {
    //obtener datos
    var keysValues = [];
    for (key in listObj[0]) {
        keysValues.push(key);
    }
    //crear tabla
    var contenedor = document.getElementById('contenedor');
    var table = document.createElement('table');
    //crear cabecera
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);
    tbody.setAttribute('id', 'cuerpoTabla');
    var td = document.createElement('tr');
    keysValues.forEach(elem => {
        var th = document.createElement('th');
        var column = document.createTextNode(elem);
        th.appendChild(column);
        td.appendChild(th);
    });
    //agregar campos
    thead.appendChild(td);
    table.appendChild(thead);
    contenedor.appendChild(table);
    listObj.forEach(elem => {
        cargarDatos(elem);
    });
}

function cargarDatos(object) {
    var fila = document.createElement('tr');
    fila.setAttribute('id', 'fila' + object.id);
    for (atributo in object) {
        var column = document.createElement('td');
        var dato = document.createTextNode(object[atributo]);
        column.setAttribute('id', object.id);
        column.addEventListener('mouseenter', selected);
        column.addEventListener('mouseout', desselected);
        column.appendChild(dato);
        fila.appendChild(column);
    }
    var tbody = document.getElementById('cuerpoTabla');
    tbody.appendChild(fila);
    fila.addEventListener('dblclick', show);

}

function requestApi() {
    var http = new XMLHttpRequest();
    //Aqui poner URL de la API
    http.open('GET', 'http://localhost:3000/materias', true);
    http.onreadystatechange = function() {
        console.log('Llego la peticion ', http.readyState);
        console.log('Status:', http.status);
        if (http.readyState === 4 && http.status === 200) {
            console.log(http.response);
            var miJson = JSON.parse(http.response);
            cargarTabla(miJson);
        }
    }
    http.send();
}

function show(event) {
    var id = event.target.getAttribute('id');
    openForm();
    getDatos(id);
}

function getDatos(id) {
    var fila = document.getElementById('fila' + id);
    var datos = fila.children;
    var name = datos[1].textContent;
    var cuatri = datos[2].textContent;
    var fechaFin = datos[3].textContent;
    var turno = datos[4].textContent;

    document.getElementById('lblId').value = id;
    document.getElementById('name').setAttribute('value', name);
    document.getElementById('cuatrimestre').value = cuatri;
    setTurno(turno);
    setFechaFin(fechaFin, '/', '-');
}

function setTurno(turno) {
    console.log('turno', turno);
    if (turno === 'Mañana' || turno === 'mañana') {

        document.getElementById('tn').removeAttribute('checked');
        document.getElementById('tm').setAttribute('checked', 'true');
    } else if (turno === 'Noche' || turno === 'noche') {
        document.getElementById('tm').removeAttribute('checked');
        document.getElementById('tn').setAttribute('checked', 'true');
    }
}

function setFechaFin(fecha, split1, split2) {
    var parts = fecha.split(split1);
    console.log(parts);
    // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
    // January - 0, February - 1, etc.
    if (split1 === '/') {
        //var mydate = new Date(parts[2], parts[1], parts[0]);
        var realdate = parts[2] + split2 + parts[1] + split2 + parts[0];
        document.getElementById('fechaFinal').setAttribute('value', realdate);
    } else {
        var realdate = parts[2] + split2 + parts[1] + split2 + parts[0];
        console.log('else', realdate);
        return realdate;
    }
}

function selected(event) {
    var id = event.target.getAttribute('id');
    var fila = document.getElementById('fila' + id);
    //alert('funciona');
    document.body.style.cursor = 'pointer';
    fila.classList.add('seleccionado');
}

function desselected(event) {
    var id = event.target.getAttribute('id');
    var fila = document.getElementById('fila' + id);
    //alert('funciona');
    document.body.style.cursor = 'default';
    fila.classList.remove('seleccionado');
}

function openForm() {
    var popup = document.getElementById('popup');
    popup.classList.add('abrirpop');
    var close = document.getElementById('close');
    close.addEventListener('click', closeForm);
    document.getElementById('btnM').addEventListener('click', modificarPost);
    var turno1 = document.getElementById('tm');
    var turno2 = document.getElementById('tn');
    turno1.addEventListener('click', activarTurno);
    turno2.addEventListener('click', activarTurno);
}

function activarTurno(event) {
    var turno1 = document.getElementById('tm');
    var turno2 = document.getElementById('tn');
    if (turno1 === event.target) {
        event.target.setAttribute('checked', 'true');
        turno2.removeAttribute('checked');
    } else {
        event.target.setAttribute('checked', 'true');
        turno1.removeAttribute('checked');
    }

}

function closeForm() {
    var popup = document.getElementById('popup');
    popup.classList.remove('abrirpop');
}

function EnviarDatos(myJson) {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        console.log('Llegando Peticion', http.readyState);
        console.log('Status:', http.status);
        if (http.readyState === 4 && http.status === 200) {
            console.log('Tenemos Respuesta', http.response);
            if ((JSON.parse(http.responseText)) != null) {
                console.log('callback ' + miRespuesta);
                //modificiar en la tabla

                console.log(JSON.parse(miRespuesta));
            }
        } else if (http.readyState === 4 && http.status === 200) {
            alert('eerrror');
        }
    }
    http.open('POST', 'http://localhost:3000/editar');
    http.setRequestHeader("Content-Type", "application/json");
    var miRespuesta = JSON.stringify(myJson);
    http.send(miRespuesta);
}

function modificarPost() {
    var name = document.getElementById('name').value;
    var cuatri = document.getElementById('cuatrimestre').value;
    var turno = verificarTurno();
    var id = document.getElementById('lblId').value;
    var fecha = document.getElementById('fechaFinal').value;
    var fechaFin = setFechaFin(document.getElementById('fechaFinal').value, '-', '/');

    var myJson = {
        id: id,
        nombre: name,
        cuatrimestre: cuatri,
        fechaFinal: fechaFin,
        turno: turno
    };
    EnviarDatos(myJson);
    ActualizarTabla(myJson);
    console.log(myJson);

}

function ActualizarTabla(json) {
    console.log('actualiza', json['id']);
    var fila = document.getElementById('fila' + json['id']);
    var datos = fila.children;
    datos[1].textContent = json['nombre'];
    datos[2].textContent = json['cuatrimestre'];
    datos[3].textContent = json['fechaFinal'];
    datos[4].textContent = json['turno'];
}

function verificarTurno() {
    var turno1 = document.getElementById('tm');
    var turno2 = document.getElementById('tn');
    console.log('turno1', turno1);
    console.log('turno2', turno2);
    if (turno1.attributes.checked != undefined && turno1.attributes.checked)
        return turno1.value;
    else if (turno2.attributes.checked != undefined && turno2.attributes.checked)
        return turno2.value;
}