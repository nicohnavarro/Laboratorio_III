//crear un div vacío y uno lleno

//var listaClaves=Object.keys();//esto es un golazo carga las variables de un objeto, entre los parentesis le paso un objeto.

/***************      AYAX     *****************/
function anonima(){
    
    var http=new XMLHttpRequest();
    http.onreadystatechange=function(){
        console.log("llegó respuesta", http.readyState, http.status);
        if(http.readyState==4){
            if(http.status===200){
                console.log("tenemos respuesta",http.responseText);
                
            }
            /* funcion anonima. **/
        }
    }
        var pass=document.getElementById("pass").value;
        var name=document.getElementById("txtUser").value;
        console.log(pass);
        console.log(name);
    http.open("GET"," http://localhost:1337/login?usr="+pass+"&pass="+name);
    http.send();
}

function anonimaPost(){
    
    var http=new XMLHttpRequest();
    http.onreadystatechange=function(){
        console.log("llegó respuesta", http.readyState, http.status);
   // document.getElementById("spiner").style.display="block";
        if(http.readyState==4){
            if(http.status===200){

                console.log("tenemos respuesta",http.responseText);

                var resp=JSON.parse(http.responseText);

                if (resp['autenticado']=="si")
                {
                console.log(resp.autenticado);
                window.location.replace("index.html?name="+name);
                }
            }
            /* funcion anonima. **/
        }
    }
        var pass=document.getElementById("pass").value;
        var name=document.getElementById("txtUser").value;
        console.log("pass:"+pass);
        console.log("user:"+name);
        
        http.open("POST"," http://localhost:1337/login");/* por defecto es true**/
        /* En post lleva content type**/
        //http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        http.send(JSON.stringify("email="+name+"pass="+pass));

        
    

    
    }