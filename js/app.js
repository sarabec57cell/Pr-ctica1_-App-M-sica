function mostrarSeccion(seccionId) {
    const secciones = document.querySelectorAll('.seccion');

    secciones.forEach(seccion => {
        seccion.classList.remove('activa');
    });

    document.getElementById(seccionId).classList.add('activa');
}
