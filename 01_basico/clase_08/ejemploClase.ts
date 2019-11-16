namespace animales {
     export function makeSounds(){
        var miPerro:Dog = new Dog('Tommy');
        miPerro.makeSound();
        var miGato:Cat = new Cat('Dally');
        miGato.makeSound();

        var lista:Array<IAnimal> = new Array<IAnimal>();
        lista.push(miPerro);
        lista.push(miGato);

        lista.forEach(function(animal){
            animal.makeSound();
        });
    }
}