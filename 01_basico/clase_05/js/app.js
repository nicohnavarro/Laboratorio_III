window.addEventListener('load', cargarBotones);

function cargarBotones(){

    var btnNewPost = document.getElementById('btnNewPost');
    var divNuevoPost = document.getElementById('divNewPost');

    divNuevoPost.style.visibility='hidden';
    btnNewPost.addEventListener('click', crearDivNewPost);
}

function mostrarIngreso(){
    var divNewPost=document.getElementById('divNewPost');

    if(divNewPost.style.visibility === "visible")   
        divNewPost.style.visibility = "hidden";
    else
        divNewPost.style.visibility = "visible";
}

function crearDivNewPost(e){

    var divNewPost= document.getElementById('divNewPost');
    var btnNewPost =document.getElementById('btnNewPost');
    var titulo;
    var nodoTexto;
    var labelTitle;
    var labelHeader;
    var labelText;
    var postTitle;
    var postHeader;
    var postText;
    var btnPost;
    e.preventDefault();
    
    //encabezado div
    titulo= document.createElement('h2');
    nodoTexto= document.createTextNode('Write your new Post');
    titulo.appendChild(nodoTexto);
    divNewPost.appendChild(titulo);

    //label de titulo
    labelTitle=document.createElement('label');
    nodoTexto= document.createTextNode('Post title');
    labelTitle.appendChild(nodoTexto);
    divNewPost.appendChild(labelTitle);

    //txtTitulo
    postTitle=document.createElement('input');
    postTitle.setAttribute('type','text');
    postTitle.setAttribute('placeholder','Titulo');
    postTitle.setAttribute('id','txtTitulo');
    divNewPost.appendChild(postTitle);

    //lblHeader
    labelHeader=document.createElement('label');
    nodoTexto=document.createTextNode('Post header');
    labelHeader.appendChild(nodoTexto);
    divNewPost.appendChild(labelHeader);

    //txtHeader
    postHeader=document.createElement('input');
    postHeader.setAttribute('type','text');
    postHeader.setAttribute('placeholder','Header');
    postHeader.setAttribute('id','txtHeader');
    divNewPost.appendChild(postHeader);

    //lblText
    labelText=document.createElement('label');
    nodoTexto=document.createTextNode('Post Text:');
    labelText.appendChild(nodoTexto);
    divNewPost.appendChild(labelText);

    //txtTexto
    postText=document.createElement('textarea');
    postText.setAttribute('id','txtTexto');
    divNewPost.appendChild(postText);

    //btn
    btnPost=document.createElement('input');
    btnPost.setAttribute('type','button');
    btnPost.setAttribute('value','post');
    btnPost.addEventListener('click',crearPost);
    divNewPost.appendChild(btnPost);

    mostrarIngreso();
    //Saco los eventos para que no me cree mas divs
    btnNewPost.removeEventListener('click',crearDivNewPost);
    btnNewPost.addEventListener('click',mostrarIngreso);

}

function crearPost(){
    console.log('se creo el post');
}

function guardarInServer(objJson){

    var http= new XMLHttpRequest();
    var dirhttp='http://localhost:1337/postearNuevaEntrada';
    var loading=document.getElementById('loading');
    loading.hidden=false;
    http.onreadystatechange = function(){
        console.log('llego la respuesta',http.readyState,http.status);
        if(http.readyState===4 && http.status===200)
        {
            loading.hidden=true;
            console.log('Tenemos respuesta',http.responseText);
            var respuesta=JSON.parse(http.responseText);
            //imgLoading.style.visibility='hidden';
            if(respuesta['respuesta']==='ok')
                alert('json save');
            else    
                alert('no json');
        }
    }
    console.log(objJson);
    http.open('POST',dirhttp);

    //Cuando uso POST, le tengo que avisar que le paso un json
    //http.sertRequestHeader('Content.Type','aplication/JSON');
    
    //Le paso JSON a string
    http.send(JSON.stringify(objJson));
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function crearPost(){
    var titulo;
    var header;
    var texto;
    var titulopost;
    var headerpost;
    var textopost;
    var sectionpostsusuarios;
    var divpost;
    var nodotexto;

    sectionpostsusuarios=document.getElementById('postsUsuarios');
    titulo=document.getElementById('txtTitulo');
    header=document.getElementById('txtHeader');
    texto=document.getElementById('txtTexto');

    divpost=document.createElement('div');
    titulopost=document.createElement('h2');
    nodotexto=document.createTextNode(titulo.value);
    titulopost.appendChild(nodotexto);
    divpost.appendChild(titulopost);

    headerpost=document.createElement('h4');
    nodotexto=document.createTextNode(header.value); //value o nodeValue?
    headerpost.appendChild(nodotexto);
    divpost.append(headerpost);

    textopost=document.createElement('p');
    nodotexto=document.createTextNode(texto.value);
    textopost.appendChild(nodotexto);
    divpost.appendChild(textopost);

    sectionpostsusuarios.appendChild(divpost);
    mostrarIngreso();

    var autor=getParameterByName('email',window.location.href);
    var datosPost={
        'title':titulo.value,
        'header':header.value,
        'posttext':texto.value,
        'author':'nicolas'
    }
    guardarInServer(datosPost);

}

