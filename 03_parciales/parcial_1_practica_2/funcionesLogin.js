window.addEventListener("load",cargo);

function cargo(){
    var boton = document.getElementById("btnSubmit");
    boton.addEventListener("click",EnviarClicked)
    var botonReset = document.getElementById("btnReset");
    botonReset.addEventListener("click",Resetear);
}

function Resetear(e){
    e.preventDefault();
    document.getElementById("txtUsername").value = "";
    document.getElementById("txtPassword").value = "";    

}

function EnviarClicked(e){
    console.log("Submit clickeado");
    e.preventDefault();
    var xhttp = new XMLHttpRequest();
    var user = document.getElementById("txtUsername").value;
    var password = document.getElementById("txtPassword").value;

    var loadingIcon = document.getElementById("loading-icon");

    loadingIcon.hidden= false;
    loadingIcon.style.visibility = 'visible';
    //POST
    xhttp.open("POST","http://localhost:1337/login");
    //El setRequestHeder setea el tipo de valor que se le va a pasar y el formato
    //xhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
    var loginData  = {"email":user,"password":password};
    xhttp.send(JSON.stringify(loginData));
    
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState === 4 && xhttp.status === 200){

            //console.log("Tenemos respuesta",xhttp.responseText);
            var respuesta =JSON.parse(xhttp.responseText)
            loadingIcon.style.visibility = 'hidden';
            loadingIcon.hidden=true;
            console.log(respuesta.autenticado=="si");

            if(respuesta.autenticado == "si"){
                window.location.href  = './index.html';
            }
        }
            
        }


}
