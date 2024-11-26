// Selecciona el primer formulario en el documento HTML
document.querySelector('form').addEventListener('submit', function(event) {
    // Prevenir la acción por defecto del formulario (evitar que la página se recargue)
    event.preventDefault();
    // Mostrar una alerta con el mensaje "Formulario enviado!" cuando el formulario es enviado
    alert('Formulario enviado!');
});