// id": "1",
// "titulo": "Casa de Lujo en la montaña",
// "transaccion": "Venta",
// "descripcion": "Casa en la montaña con excelente vista, acabados de lujo a un precio irresistible",
// "precio": "$4,500,0000",
// "num_wc": "3",
// "num_estacionamiento": 1,
// "num_dormitorio": 5,
// "active": "true"

function Anuncio(id,titulo,transaccion,descripcion,precio,num_wc,num_estacionamiento,num_dormitorio,active=true){
    this.titulo=titulo;
    this.transaccion=transaccion;
    this.descripcion=descripcion;
    this.precio=precio;
    this.num_wc=num_wc;
    this.num_estacionamiento=num_estacionamiento;
    this.num_dormitorio=num_dormitorio;
    this.id=id;
    this.active=active;
}

