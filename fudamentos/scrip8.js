let año = parseInt(prompt("Ingrese un año:"));

if ((año % 4 == 0 && año % 100 != 0) || (año % 400 == 0)) {
    document.getElementById("resultado").innerHTML =
        "El año " + año + " es bisiesto.";
} else {
    document.getElementById("resultado").innerHTML =
        "El año " + año + " no es bisiesto.";
}