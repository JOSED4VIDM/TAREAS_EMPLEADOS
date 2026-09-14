// declaraciones valores
// const precio = 100000;
// const tipoCliente = "premium";

let precio = parseFloat(prompt("Ingrese el precio del producto:"));
let  nombre = prompt("ingrese tipo de cliente premium o normal")


function calcularTotal(precio, tipoCliente) {
    let descuento = 0;
    if (tipoCliente === "premium") {
        descuento = 0.20;
    } else if (tipoCliente === "normal") {
        descuento = 0.10;
    }
    return precio - (precio * descuento);
}

const total = calcularTotal(precio, tipoCliente);

const resultadoElement = document.getElementById("resultado");

if (resultadoElement) {
    resultadoElement.innerHTML = `
        Precio original: $${precio}<br>
        Tipo de cliente: ${tipoCliente}<br>
        Total a pagar: $${total}
    `;
}