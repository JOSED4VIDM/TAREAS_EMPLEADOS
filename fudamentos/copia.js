// FECHA DE ATENCIÓN
const fecha = new Date();

// DATOS DEL PACIENTE
let paciente = prompt("Ingrese el nombre del paciente:");
let regimen = confirm("¿Eres subsidiado? (Aceptar = Si, Cancelar = No )");

// GASTOS
let medicamentos = parseFloat(prompt("Ingrese el valor de medicamentos:"));
let hospitalizacion = parseFloat(prompt("Ingrese el valor de hospitalización:"));
let cirugia = parseFloat(prompt("Ingrese el valor de cirugía:"));
let examenes = parseFloat(prompt("Ingrese el valor de exámenes médicos:"));

// VALIDAR DATOS
if (
    isNaN(medicamentos) ||
    isNaN(hospitalizacion) ||
    isNaN(cirugia) ||
    isNaN(examenes)
) {
    document.write("Error: Debe ingresar valores numéricos válidos.");
} else {

    // CÁLCULOS
    let totalGastos = medicamentos + hospitalizacion + cirugia + examenes;
    let promedio = totalGastos / 4;

    let mayorGasto = Math.max(medicamentos,hospitalizacion,cirugia,examenes);

    let menorGasto = Math.min(medicamentos,hospitalizacion,cirugia,examenes);

    let valorPagar;

    if (regimen) { // Si es subsidiado
        valorPagar = totalGastos * 0.20;
    } else {
        valorPagar = totalGastos;
    }

    // MOSTRAR RESULTADOS
    document.write("<h2>Hospitalización del Paciente</h2>");
    document.write("Nombre del paciente: " + paciente + "<br>");
    document.write("Régimen subsidiado: " + (regimen ? "Sí" : "No") + "<br><br>");

    document.write("Medicamentos: $" + medicamentos.toFixed(2) + "<br>");
    document.write("Hospitalización: $" + hospitalizacion.toFixed(2) + "<br>");
    document.write("Cirugía: $" + cirugia.toFixed(2) + "<br>");
    document.write("Exámenes médicos: $" + examenes.toFixed(2) + "<br><br>");

    document.write("Total de gastos: $" + totalGastos.toFixed(2) + "<br>");
    document.write("Promedio de gastos: $" + promedio.toFixed(2) + "<br>");
    document.write("Mayor gasto: $" + mayorGasto.toFixed(2) + "<br>");
    document.write("Menor gasto: $" + menorGasto.toFixed(2) + "<br>");
    document.write("Valor a pagar: $" + valorPagar.toFixed(2) + "<br>");
    document.write("Fecha de atención: " + fecha.toLocaleDateString());
}







