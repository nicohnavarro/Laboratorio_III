var segundoParcial;
(function (segundoParcial) {
    var vehiculos = new Array();
    function Mostrar() {
        if ($("#tipo").val() == "auto") {
            $("#autoDiv").show();
            $("#camionetaDiv").hide();
        }
        else {
            $("#camionetaDiv").show();
            $("#autoDiv").hide();
        }
    }
    segundoParcial.Mostrar = Mostrar;
    function Agregar() {
        $("#form").show();
    }
    segundoParcial.Agregar = Agregar;
    function calcularID(array) {
        if (array.length == 0)
            return 1;
        else {
            return array.reduce(function (alto, item) {
                if (item.getId() >= alto)
                    return item.getId() + 1;
            }, 0);
        }
    }
    segundoParcial.calcularID = calcularID;
    function Sumar() {
        var id;
        id = calcularID(vehiculos);
        var modelo = (String)($("#txtModel").val());
        var marca = String($("#txtMarca").val());
        var precio = Number($("#numPrecio").val());
        if ($("#tipo").val() == "auto") {
            var cp = (Number)($("#cantPuertas").val());
            var a = new segundoParcial.Auto(cp, marca, modelo, precio, id);
            vehiculos.push(a);
        }
        else {
            var cp = (Boolean)($("#cuatroX").val());
            var a = new segundoParcial.Camioneta(cp, marca, modelo, precio, id);
            vehiculos.push(a);
        }
        $("#form").hide();
        //$("#myForm").hide();
    }
    segundoParcial.Sumar = Sumar;
    window.addEventListener("load", filtrado);
    function filtrado() {
        $("#filtro").keypress(function () {
            var marc = (String)($("#filtro").val());
            console.log(marc);
            var vehicM;
            vehicM = vehiculos.filter(function (item) {
                return item.getMarca().slice(0, marc.length) == marc;
            });
            console.log(vehicM.length);
            CargarTabla2(vehicM);
        });
    }
    segundoParcial.filtrado = filtrado;
    function Calcular() {
        var total = vehiculos.reduce(function (tot, item) {
            return tot + item.getPrecio();
        }, 0);
        var t = total / vehiculos.length;
        alert("Promedio= " + t);
    }
    segundoParcial.Calcular = Calcular;
    function CargarTabla() {
        CargarTabla2(vehiculos);
    }
    segundoParcial.CargarTabla = CargarTabla;
    function CargarTabla2(vehicZ) {
        var index = 0;
        $("thead").remove();
        for (var i = 0; i < vehiculos.length; i++) {
            $("#fila" + index).remove();
            index++;
        }
        var tabla = $("#tabla");
        var thead = document.createElement("thead");
        var tr = document.createElement("tr");
        tabla.append(thead);
        thead.appendChild(tr);
        var listaClaves = Object.keys(vehicZ[0]);
        listaClaves.forEach(function (clave) {
            var texto = document.createTextNode(clave);
            var th = document.createElement("th");
            th.appendChild(texto);
            tr.appendChild(th);
        });
        var tBody = document.createElement("tbody");
        tabla.append(tBody);
        vehicZ.forEach(function (objeto) {
            var tr = document.createElement("tr");
            var listaClaves2 = Object.keys(objeto);
            tBody.appendChild(tr);
            var n = vehicZ.indexOf(objeto);
            tr.setAttribute("id", "fila" + n);
            listaClaves2.forEach(function (clave) {
                var texto = document.createTextNode(objeto[clave]);
                var td = document.createElement("td");
                td.appendChild(texto);
                tr.appendChild(td);
            });
        });
    }
    segundoParcial.CargarTabla2 = CargarTabla2;
})(segundoParcial || (segundoParcial = {}));
