// obras


var listaObras = [
    { nombre: "Chalkroom" , año: "2017", img: "img/obra-anderson.jpg" },
    { nombre: "Kick It" , año: "2025", img: "img/obra-anderson-1.jpg" },
    { nombre: "Fabric 5" , año: "2015", img: "img/obra-anderson-2.webp" },
    { nombre: "Red Trees" , año: "2021", img: "img/obra-anderson-3.webp" },
    { nombre: "Mt. Daly/US IV" , año: "1982", img: "img/obra-anderson-4.png" }
    ];

var contenedor = document.getElementById("galeria");
var boton = document.getElementById("btnCambiar");

function mostrarObras(tamaño) {
    contenedor.innerHTML = "";

for (var i = 0; i < listaObras.length; i++) {
    var obra = listaObras[i];
    contenedor.innerHTML += `
    <div class="obra-item">
                <img src="${obra.img}" alt="${obra.nombre}" style="width: ${tamaño};">
                <p><strong>${obra.nombre}</strong> (${obra.año})</p>
            </div>
        `;
    }
}
var grande = false;
boton.addEventListener("click", function() {
    grande = !grande; // Alternar estado
    var nuevoTamaño = grande ? "200px" : "100px";
    mostrarObras(nuevoTamaño);
});

mostrarObras("100px");


