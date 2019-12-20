namespace segundoParcial{
    export class Auto extends Vehiculo{

        private cantidadPuertas:number;

        constructor(cantPuertas:number,marca:string, modelo:string, precio:number, id:number){
            super(marca, modelo, precio, id);
            this.cantidadPuertas=cantPuertas;
        }

        
        public getPuertas() : number {
            return this.cantidadPuertas;
        }
        
    }

}