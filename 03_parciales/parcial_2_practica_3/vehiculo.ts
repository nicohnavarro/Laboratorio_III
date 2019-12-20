namespace segundoParcial{
    export abstract class Vehiculo{

        private marca:string;
        private modelo:string;
        private precio:number;
        private id:number;

        constructor(marca:string, modelo:string, precio:number, id:number){
            this.marca=marca;
            this.modelo=modelo;
            this.precio=precio;
            this.id=id;
        }

        
            
            public getMarca() : string {
                return this.marca;
            }
            
            public getModelo() : string {
                return this.modelo;
            }

            public getPrecio():number{
                return this.precio;
            }

            public getId():number{
                return this.id;
            }
    }

}