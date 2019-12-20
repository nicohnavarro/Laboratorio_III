namespace segundoParcial{
    export class Camioneta extends Vehiculo{

        private cuatroXcuatro:boolean;

        constructor(cuatroXcuatro:boolean,marca:string, modelo:string, precio:number, id:number){
            super(marca, modelo, precio, id);
            this.cuatroXcuatro=cuatroXcuatro;
        }

        
        public getCuatro() : boolean {
            return this.cuatroXcuatro;
        }
        
    }

}