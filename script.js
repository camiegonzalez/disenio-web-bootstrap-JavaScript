function enviarFormulario(event) {
    event.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    if (nombre.trim() && email.trim()) {
        alert(`Gracias, ${nombre}. Hemos recibido tu consulta. Te responderemos a ${email} pronto.`);
        document.getElementById('contactForm').reset(); 
    } else {
        alert('Por favor, completa todos los campos antes de enviar.');
    }
}
