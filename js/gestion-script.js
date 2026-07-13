 // variables
 
 var listaObras = [];
var cantidad = 0;
 var cargadas = 0;
  var tiempoMB = 0;
var costoMB = 0;
 
 var inCantidad = document.getElementById("inCantidadObras");
 var btnCant = document.getElementById("btnConfrmCant");
var msjCant = document.getElementById("msjCantidad");
 
var pDatosObra = document.getElementById("pDatosObra");
var inNombre = document.getElementById("inNombreObra");
var inDuracion = document.getElementById("inputDuracionObra");
 var inPeso = document.getElementById("inputPesoObra");
var btnAgregar = document.getElementById("btnAgregarObra");
var msjObras = document.getElementById("contadorObras");
 
var pasoGral = document.getElementById("pasoGral");
 var inTiempo = document.getElementById("inputTiempoTransferencia");
var inCosto = document.getElementById("inputCostoMB");
var btnGral = document.getElementById("btnGuardarGrales");
 
var btnCalc = document.getElementById("btnCalcular");
 var btnReset = document.getElementById("btnReiniciar");
var resultados = document.getElementById("resultados");

// variables 

//cantidad de obras a cargar
btnCant.addEventListener("click", function () {
    var valor = parseInt(inCantidad.value);
 
    if (isNaN(valor) || valor <= 0) {
        msjCant.textContent = "Ingresá un número entero mayor a 0.";
        return;
    }
 
    cantidad = valor;
    inCantidad.disabled = true;
    btnCant.disabled = true;
    msjCant.textContent = "Cantidad confirmada: " + cantidad;
 
    pDatosObra.classList.remove("oculto");
    inNombre.disabled = false;
    inDuracion.disabled = false;
    inPeso.disabled = false;
    btnAgregar.disabled = false;
    msjObras.textContent = "Cargadas: 0 / " + cantidad;
});
 
 
// cantidad de obras a cargar

//carga de cada obra

btnAgregar.addEventListener("click", function () {
    var nombre = inNombre.value.trim();
    var duracion = Number(inDuracion.value);
    var peso = Number(inPeso.value);
 
    if (nombre === "" || isNaN(duracion) || duracion <= 0 || isNaN(peso) || peso <= 0) {
        alert("Completá nombre, duración y peso con valores válidos.");
        return;
    }
 
    listaObras.push({ nombre: nombre, duracion: duracion, peso: peso });
    cargadas++;
    msjObras.textContent = "Cargadas: " + cargadas + " / " + cantidad;
 
    inNombre.value = "";
    inDuracion.value = "";
    inPeso.value = "";
 
    if (cargadas === cantidad) {
        inNombre.disabled = true;
        inDuracion.disabled = true;
        inPeso.disabled = true;
        btnAgregar.disabled = true;
 
        pasoGral.classList.remove("oculto");
        inTiempo.disabled = false;
        inCosto.disabled = false;
        btnGral.disabled = false;
    }
});
 
 
//carga de cada obra

//tiempo de transferencia y costo por MB
btnGral.addEventListener("click", function () {
    var tiempo = Number(inTiempo.value);
    var costo = Number(inCosto.value);
 
    if (isNaN(tiempo) || tiempo <= 0 || isNaN(costo) || costo <= 0) {
        alert("Ingresá tiempo y costo con valores válidos.");
        return;
    }
 
    tiempoMB = tiempo;
    costoMB = costo;
    inTiempo.disabled = true;
    inCosto.disabled = true;
    btnGral.disabled = true;
    btnCalc.disabled = false;
});
 
 
//tiempo de transferencia y costo por MB
btnCalc.addEventListener("click", function () {
    var duracionTotal = 0;
    var pesoTotal = 0;
    var mayor = listaObras[0];
 
    for (var i = 0; i < listaObras.length; i++) {
        duracionTotal += listaObras[i].duracion;
        pesoTotal += listaObras[i].peso;
        if (listaObras[i].duracion > mayor.duracion) {
            mayor = listaObras[i];
        }
    }
 
    var promedio = duracionTotal / listaObras.length;
    var tiempoTransfSeg = (mayor.peso * tiempoMB) / 1000;
    var presupuestoAnual = pesoTotal * costoMB * 12;
 
    resultados.innerHTML =
        "<p>Duración total: " + duracionTotal.toFixed(2) + " min</p>" +
        "<p>Duración promedio: " + promedio.toFixed(2) + " min</p>" +
        "<p>Obra más larga: " + mayor.nombre + " (" + mayor.duracion + " min)</p>" +
        "<p>Tiempo de transferencia: " + tiempoTransfSeg.toFixed(2) + " seg</p>" +
        "<p>Presupuesto anual: $" + presupuestoAnual.toFixed(2) + "</p>";
 
    btnCalc.disabled = true;
    btnReset.classList.remove("oculto");
});
 
//tiempo de transferencia y costo por MB
 
// reiniciar todo
btnReset.addEventListener("click", function () {
    listaObras = [];
    cantidad = 0;
    cargadas = 0;
    tiempoMB = 0;
    costoMB = 0;
 
    inCantidad.value = "";
    inCantidad.disabled = false;
    btnCant.disabled = false;
    msjCant.textContent = "";
 
    pDatosObra.classList.add("oculto");
    inNombre.value = "";
    inDuracion.value = "";
    inPeso.value = "";
    msjObras.textContent = "";
 
    pasoGral.classList.add("oculto");
    inTiempo.value = "";
    inCosto.value = "";
 
    btnCalc.disabled = true;
    btnReset.classList.add("oculto");
 
    resultados.innerHTML = "<p>Todavía no hay resultados. Complete la carga de datos.</p>";
});
// reiniciar todo