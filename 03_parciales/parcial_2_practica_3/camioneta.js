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
    var Camioneta = /** @class */ (function (_super) {
        __extends(Camioneta, _super);
        function Camioneta(cuatroXcuatro, marca, modelo, precio, id) {
            var _this = _super.call(this, marca, modelo, precio, id) || this;
            _this.cuatroXcuatro = cuatroXcuatro;
            return _this;
        }
        Camioneta.prototype.getCuatro = function () {
            return this.cuatroXcuatro;
        };
        return Camioneta;
    }(segundoParcial.Vehiculo));
    segundoParcial.Camioneta = Camioneta;
})(segundoParcial || (segundoParcial = {}));
