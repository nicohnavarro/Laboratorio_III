namespace Parcial {
    export class Alumno extends Persona{
        private legajo:number;
        private promedio:number;

        constructor(nombre:string,apellido:string,legajo:number)
        {
            super(nombre,apellido);
            this.legajo=legajo;
            
        }

        getLegajo():number{
            return this.legajo;
        }

        setPromedio(promedio:number):boolean{
            if(promedio>1){
                this.promedio=promedio;
                return true;
            }
            else{
                return false;
            }
        }

        getPromedio():number{
            return this.promedio;
        }
    }
}