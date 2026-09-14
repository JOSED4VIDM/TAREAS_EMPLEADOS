const botonAgregar = document.getElementById('btn-agregar');
const contenedorElementos = document.getElementById('elementos');
const claveAlmacenamiento = 'elementosGuardados';
let elementosGuardados = JSON.parse(localStorage.getItem(claveAlmacenamiento) || '[]');

function mostrarElementos() {
    contenedorElementos.innerHTML = '';

    elementosGuardados.forEach((textoElemento, indice) => {
        const nuevoElemento = document.createElement('li');
        nuevoElemento.className = 'elemento';
        nuevoElemento.textContent = textoElemento;
        nuevoElemento.addEventListener('click', () => {
            elementosGuardados.splice(indice, 1);
            localStorage.setItem(claveAlmacenamiento, JSON.stringify(elementosGuardados));
            mostrarElementos();
        });

        contenedorElementos.appendChild(nuevoElemento);
    });
}

mostrarElementos();

botonAgregar.addEventListener('click', () => {
    elementosGuardados.push(`Elemento ${elementosGuardados.length + 1}`);
    localStorage.setItem(claveAlmacenamiento, JSON.stringify(elementosGuardados));
    mostrarElementos();
});
