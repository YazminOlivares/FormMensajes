function validateForm() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');

    // Regex para validar formato de correo
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Banderas para indicar si hay errores
    let isValid = true;

    // Validación de correo electrónico
    if (!emailRegex.test(email)) {
        emailError.style.display = 'block';
        emailError.textContent = 'Por favor, ingresa un correo válido.';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Validación de longitud de contraseña
    if (password.length < 8) {
        passwordError.style.display = 'block';
        passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres.';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    // Evitar el envío del formulario si hay errores
    return isValid;
}
