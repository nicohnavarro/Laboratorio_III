// Funciones Básicas
function sumar( a, b ){
  return a + b;
}
(a:number,b:number):number=>(a+b);

var contar = function( heroes ):number{
  return heroes.length;
}
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
function llamarBatman( llamar:boolean ){
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman(true);

// Rest?
function unirheroes( ...personas:string[] ):string
{
  return personas.join(", ");
}


// Tipo funcion
function noHaceNada( numero, texto, booleano, arreglo ){
}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
var noHaceNadaTampoco = function(callback,numero:number,texto:string,booleano:boolean, arreglo:Array<string>){
  callback(numero,texto,booleano,arreglo);
};
