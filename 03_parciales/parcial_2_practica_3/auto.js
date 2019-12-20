var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var segundoParcial;
(function (segundoParcial) {
    var Auto = /** @class */ (function (_super) {
        __extends(Auto, _super);
        function Auto(cantPuertas, marca, modelo, precio, id) {
            var _this = _super.call(this, marca, modelo, precio, id) || this;
            _this.cantidadPuertas = cantPuertas;
            return _this;
        }
        Auto.prototype.getPuertas = function () {
            return this.cantidadPuertas;
        };
        return Auto;
    }(segundoParcial.Vehiculo));
    segundoParcial.Auto = Auto;
})(segundoParcial || (segundoParcial = {}));
