function validateForm() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let valido = true;

    if (!emailRegex.test(email)) {
        emailError.style.display = 'block';
        emailError.textContent = 'Por favor, ingresa un correo válido.';
        valido = false;
    } else {
        emailError.style.display = 'none';
    }

    if (password.length < 8) {
        passwordError.style.display = 'block';
        passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres.';
        valido = false;
    } else {
        passwordError.style.display = 'none';
    }
    return valido;
}
