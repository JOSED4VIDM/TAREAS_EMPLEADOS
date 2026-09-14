let entradaResponsable = document.getElementById("responsable");
let entrada = document.getElementById("tarea");
let botonAgregar = document.getElementById("botonAgregar");
let lista = document.getElementById("listaTareas");

botonAgregar.onclick = agregarTarea;

entrada.onkeydown = function (evento) {
    if (evento.key === "Enter") {
        agregarTarea();
    }
};

entradaResponsable.onkeydown = function (evento) {
    if (evento.key === "Enter") {
        agregarTarea();
    }
};

function agregarTarea() {

    let responsable = entradaResponsable.value.trim();
    let texto = entrada.value.trim();

    if (responsable === "" || texto === "") {
        alert("Escribe el responsable y la tarea primero");
        return;
    }

    let nuevaTarea = document.createElement("li");

    let textoTarea = document.createElement("span");
    textoTarea.textContent = "Tarea: " + texto;
    textoTarea.classList.add("tareaTexto");

    let nombreResponsable = document.createElement("small");
    nombreResponsable.textContent = "Encargado de hacer la tarea: " + responsable;
    nombreResponsable.classList.add("responsable");

    let fechaCreacion = document.createElement("small");
    fechaCreacion.textContent = "Creada: " + new Intl.DateTimeFormat("es-CO", {
        dateStyle: "short",
        timeStyle: "medium",
        timeZone: "America/Bogota"
    }).format(new Date());
    fechaCreacion.classList.add("fecha");

    let informacion = document.createElement("div");
    informacion.classList.add("informacion");
    informacion.appendChild(textoTarea);
    informacion.appendChild(nombreResponsable);
    informacion.appendChild(fechaCreacion);

    let progreso = document.createElement("div");
    progreso.classList.add("progreso");

    let barra = document.createElement("input");
    barra.type = "range";
    barra.min = "0";
    barra.max = "100";
    barra.value = "0";
    barra.setAttribute("aria-label", "Progreso de la tarea");

    let porcentaje = document.createElement("span");
    porcentaje.textContent = "0%";
    porcentaje.classList.add("porcentaje");

    barra.oninput = function () {
        porcentaje.textContent = barra.value + "%";
    };

    progreso.appendChild(barra);
    progreso.appendChild(porcentaje);

    let botones = document.createElement("div");
    botones.classList.add("botones");

    let botonCompletar = document.createElement("button");
    botonCompletar.textContent = "✓";
    botonCompletar.classList.add("completar");

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "X";
    botonEliminar.classList.add("eliminar");

    botonCompletar.onclick = function () {
        textoTarea.classList.toggle("completada");
    };

    botonEliminar.onclick = function () {
        lista.removeChild(nuevaTarea);
    };

    botones.appendChild(botonCompletar);
    botones.appendChild(botonEliminar);

    nuevaTarea.appendChild(informacion);
    nuevaTarea.appendChild(progreso);
    nuevaTarea.appendChild(botones);

    lista.appendChild(nuevaTarea);

    entradaResponsable.value = "";
    entrada.value = "";
    entradaResponsable.focus();
}