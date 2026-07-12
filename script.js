// declaro variables globales
let cantObras = 0;
let obrasCargadas = 0;
let listaObras = [];
//
document.getElementById('config').addEventListener("click", () => {
    cantObras = parseInt(document.getElementById("cantidad").value);
    if (cantObras > 0) {
        document.getElementById('config').style.display = 'none';
        document.getElementById('datos').style.display = 'block';
    }
});
document.getElementById('guardar').addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    const duracion = parseInt(document.getElementById('duracion').value);
    const peso = parseInt(document.getElementById('peso').value);

    if (nombre && duracion > 0 && peso > 0) {
        listaObras.push({ nombre, duracion, peso });
        obrasCargadas++;

        document.getElementById('nombre').value = '';
        document.getElementById('duracion').value = '';
        document.getElementById('peso').value = '';
        if(obrasCargadas === cantObras) {
            document.getElementById('datos').style.display = 'none';
            document.getElementById('datosGrales').style.display = 'block';
            document.getElementById('calcular').disabled = false;
        }
    } else {
        alert("Por favor, completa todos los campos correctamente.");
    }
});