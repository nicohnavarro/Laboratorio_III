var animales;
(function (animales) {
    function makeSounds() {
        var miPerro = new animales.Dog('Tommy');
        miPerro.makeSound();
        var miGato = new animales.Cat('Dally');
        miGato.makeSound();
        var lista = new Array();
        lista.push(miPerro);
        lista.push(miGato);
        lista.forEach(function (animal) {
            animal.makeSound();
        });
    }
    animales.makeSounds = makeSounds;
})(animales || (animales = {}));
