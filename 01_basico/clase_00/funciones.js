function mostrar(){
    var usr = document.getElementById("usr").value;
    var pass= document.getElementById("pass").value;
    if(usr=="hola" && pass=="mundo"){
        alert("Todo esta bien");
    } else {
        alert("Usuarios y Password Equivocados");
    }

}