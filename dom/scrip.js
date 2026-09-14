// Ruta del archivo: c:\JS\scrip.js
// Animación de botón - 6 segundos

// Seleccionar el botón
const boton = document.getElementById('btn-animacion');

// Función para iniciar la animación
function iniciarAnimacion() {
    if (boton) {
        // Agregar clase de animación
        boton.classList.add('animando');

        // Remover la clase después de 6 segundos (6000 milisegundos)
        setTimeout(() => {
            boton.classList.remove('animando');
        }, 6000);
    }
}

// Evento al hacer clic en el botón
if (boton) {
    boton.addEventListener('click', iniciarAnimacion);
}

// O si prefieres que la animación se inicie al cargar la página:
// window.addEventListener('load', iniciarAnimacion);
