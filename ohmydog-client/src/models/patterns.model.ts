// Admite espacios, mayúsculas y minúsculas incluyendo bocales con acento.
// Requiere iniciar con al menos 3 caracteres sin incluir el espacio.
// Máximo 32 caracteres.
export const NamePattern = /^[a-zA-ZÁÉÍÓÚáéíóú]{3}[a-zA-ZÁÉÍÓÚáéíóú ]{0,29}$/

// Admite mayúsculas, minúsculas, números y caracteres especiales.
// Requiere al menos 8 caracteres, una mayúscula, minúscula, un número y un caracter especial.
// Máximo 99 caracteres.
export const PasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

// Admite desde 1 hasta n caracteres dentro del rango "[a-zA-Z0-9_]", guiones y puntos.
// Requiere un arroba, y terminar con al menos 2 caracteres y máximo 4.
export const EmailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

// Admite solo números.
// Requiere que sea mayor de 18.
export const AgePattern = /^(1[89]|[2-9][0-9])$/

// Acepta solo números.
// Requiere mínimo 7 números y máximo 8.
export const DniPattern = /^[0-9]{7,8}$/

// Acepta solo números.
// Requiere 10 números.
export const TelephonePattern = /^[0-9]{10}$/