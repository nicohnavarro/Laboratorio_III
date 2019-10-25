function AltaAnuncio(anuncio) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            if (xhr.responseText == 'Alta Exitosa')
                ArmarTabla();
            else {
                console.log(+xhr.responseText);
                ArmarTabla();
            }
        } else {
            divTabla.innerHTML = '';
            divTabla.appendChild(Spinner());
        }
    }
    xhr.open('POST', 'http://localhost:3000/altaAnuncio', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(anuncio));
}
function ArmarTabla() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE) {
            if (this.status == 200) {
                json = JSON.parse(xhr.responseText);
                divTabla.innerHTML = "";
                divTabla.appendChild(crearTabla(json["data"]));
                let tds = document.getElementsByTagName('td');
                for (let i = 0; i < tds.length; i++) {
                    let td = tds[i];
                    td.addEventListener('click', CargarFormTd);
                }
            } else
                console.log("error: " + xhr.status);
        } else {
            divTabla.appendChild(Spinner());
        }
    }
    xhr.open('GET', 'http://localhost:3000/traerAnuncios', true);
    xhr.send();
}
function BajaAnuncio(anuncio) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            var res = JSON.parse(xhr.responseText);
            if (res['message'] == "Baja exitosa") {
                console.log("Baja exitosa");
                ArmarTabla();
            }
        } else {
            divTabla.innerHTML = '';
            divTabla.appendChild(Spinner());
        }
    }
    xhr.open('POST', 'http://localhost:3000/bajaAnuncio', true);
    xhr.setRequestHeader('Content-type', 'Application/json');
    xhr.send(JSON.stringify(anuncio));
}
function ModificarAnuncio(anuncio) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            if (JSON.parse(xhr.responseText)['todoOk'] == 0) {
                console.log('modificacion exitosa');
                ArmarTabla();
            }else
                console.log(JSON.parse(xhr.responseText)[0]);
        } else {
            divTabla.innerHTML = '';
            divTabla.appendChild(Spinner());
        }
    }
    xhr.open('POST', 'http://localhost:3000/modificarAnuncio', true);
    xhr.setRequestHeader('Content-type', 'Application/json');
    xhr.send(JSON.stringify(anuncio));
}
function CargarFormTd(e) {
    let tr = e.target.parentElement;
    let nodes = tr.childNodes;
    botonModificar.className = 'boton boton-verde visible';
    botonCancelar.className = 'boton boton-amarillo visible';
    botonEliminar.className = 'boton boton-rojo visible';
    let anuncio = new Anuncio(nodes[0].textContent, nodes[1].textContent, nodes[2].textContent,
        nodes[3].textContent, nodes[4].textContent, nodes[5].textContent, nodes[6].textContent,
        nodes[7].textContent);
    document.getElementById('divId').hidden = false;
    CargarForm(document.forms[0], anuncio);
}