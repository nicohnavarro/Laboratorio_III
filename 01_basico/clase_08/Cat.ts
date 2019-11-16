namespace animales{
    export class Cat implements IAnimal {
        public name:string;

        constructor(name:string){
            this.name=name;
        }

        makeSound(){
            console.log('Miauuuuu!'+this.name);
        }
    }
}