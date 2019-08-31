function cargar(){
    var boton= document.getElementById("btn");
    //boton.onclick=mostrar;
    boton.addEventListener("click",mostrar);
}

//window.onload=a;
window.addEventListener("load",cargar);

function mostrar(){
    alert("Funciona");
    var usuario = document.getElementById("usuario").value;
    var password= document.getElementById("password").value; 
    if(usuario=="37354627" && password=="37354627"){
        alert("Todo esta bien");
    } else {
        alert("Usuarios y Password Equivocados");
    }

}