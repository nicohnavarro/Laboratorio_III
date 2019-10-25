window.addEventListener('load', inicializarManejadores, false);

function Persona(id,nombre,apellido,sexo){
    this.id=id;
    this.nombre=nombre;
    this.apellido=apellido;
    this.sexo=sexo;
}

//Cuando se carga la paguina llama a inicializarManejadores
function inicializarManejadores() {
    traerCards();
}

function traerCards() {
    console.log("traerCards");
    var http = new XMLHttpRequest();
    http.open("GET", "http://localhost:3000/personas", true);
    http.onreadystatechange = function () {
        console.log("Llego la peticion", http.readyState);
        console.log(http.status);
        if (http.readyState === 4 && http.status === 200) {
            console.log(http.response);
            alert("Ingreso con exito");
            var miobjetoJson = JSON.parse(http.response);
            console.log(miobjetoJson);
            cargarCards(miobjetoJson);
        }
    }
    http.send();
}

function cargarCards(lista) {
    for (var i = 0; i < lista.length; i++) {
        var objeto = lista[i];
        cargarDatos(objeto);
    }
}

function cargarDatos(obj){
    var container=document.getElementById('container');
    var card=document.createElement('div');
    card.className+= 'card';
    card.setAttribute('onclick','editar(event)');

    //User Image
    var userImg=document.createElement('div');
    userImg.className+='userImg';
    var imagen=document.createElement('img');
    imagen.setAttribute('src','../images/user.png');
    userImg.appendChild(imagen);

    //User Info
    var userInfo=document.createElement('div');
    userInfo.setAttribute('id','userInfo');
    userInfo.className+='userInfo';
    //nombre
    var nombre=document.createElement('span');
    nombre.setAttribute('id','nombre');
    var txtnombre=document.createTextNode(obj['nombre']);
    nombre.appendChild(txtnombre);
    //apellido
    var apellido=document.createElement('span');
    apellido.setAttribute('id','apellido');
    var txtapellido=document.createTextNode(obj['apellido']);
    apellido.appendChild(txtapellido);
    //sexo
    var sexo=document.createElement('span');
    sexo.setAttribute('id','sexo');
    var txtsexo=document.createTextNode(obj['sexo']);
    sexo.appendChild(txtsexo);
    userInfo.appendChild(nombre);
    userInfo.appendChild(apellido);
    userInfo.appendChild(sexo);
    
    
    //Agregamos todo
    card.appendChild(userImg);
    card.appendChild(userInfo);
    
    container.appendChild(card);
}

function editar(e){
    console.log(e);
    var form=document.getElementById('form');
    form.hidden=false;
}