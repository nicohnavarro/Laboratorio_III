var segundoParcial;
(function (segundoParcial) {
    var Vehiculo = /** @class */ (function () {
        function Vehiculo(marca, modelo, precio, id) {
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
            this.id = id;
        }
        Vehiculo.prototype.getMarca = function () {
            return this.marca;
        };
        Vehiculo.prototype.getModelo = function () {
            return this.modelo;
        };
        Vehiculo.prototype.getPrecio = function () {
            return this.precio;
        };
        Vehiculo.prototype.getId = function () {
            return this.id;
        };
        return Vehiculo;
    }());
    segundoParcial.Vehiculo = Vehiculo;
})(segundoParcial || (segundoParcial = {}));
