namespace animales{
    export class Dog implements IAnimal {
        public name:string;

        constructor(name:string){
            this.name=name;
        }

        makeSound(){
            console.log('Guauuuu!'+this.name);
        }
    }
}