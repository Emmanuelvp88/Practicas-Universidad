// Función para verificar si la contraseña cumple con los requisitos
function verificarContrasena(contrasena) {
    // Verificar la longitud de la contraseña
    if (contrasena.length < 8) {
        return false;
    }

    // Verificar si la contraseña contiene al menos una letra mayúscula, una minúscula y un número
    var tieneMayuscula = false;
    var tieneMinuscula = false;
    var tieneNumero = false;

    for (var i = 0; i < contrasena.length; i++) {
        var caracter = contrasena.charAt(i);
        if (caracter >= "A" && caracter <= "Z") {
            tieneMayuscula = true;
        } else if (caracter >= "a" && caracter <= "z") {
            tieneMinuscula = true;
        } else if (!isNaN(caracter)) {
            tieneNumero = true;
        }
    }

    // Devolver true si cumple con todos los requisitos, de lo contrario devolver false
    return tieneMayuscula && tieneMinuscula && tieneNumero;
}

// Solicitar al usuario ingresar una contraseña
var contrasenaUsuario = prompt("Ingrese su contraseña:");

// Verificar si la contraseña cumple con los requisitos
if (verificarContrasena(contrasenaUsuario)) {
    alert("La contraseña cumple con los requisitos.");
} else {
    alert("La contraseña no cumple con los requisitos.");
}
