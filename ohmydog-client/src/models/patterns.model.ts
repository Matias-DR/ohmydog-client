export const Patterns = {
    /**
     * Admite solo archivos de tipo imagen
     */
    image: /\.(png|jpg|jpeg)$/,

    /**
     * Admite espacios, mayúsculas y minúsculas incluyendo bocales con acento.
     * Requiere iniciar con al menos 3 caracteres sin incluir el espacio.
     * Máximo 32 caracteres.
     */
    name: /^[a-zA-ZÁÉÍÓÚáéíóú]{3}[a-zA-ZÁÉÍÓÚáéíóú ]{0,29}$/,

    /**
     * Admite mayúsculas, minúsculas, números y caracteres especiales.
     * Requiere al menos 8 caracteres, una mayúscula, minúscula, un número y un caracter especial.
     * Máximo 99 caracteres.
     */
    password: /^(?=.*[!-~])(?=.{8,})/,

    /**
     * Admite desde 1 hasta n caracteres dentro del rango "[a-zA-Z0-9_]", guiones y puntos.
     * Requiere un arroba, y terminar con al menos 2 caracteres y máximo 4.
     */
    email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,

    /**
     * Admite solo números.
     * Requiere que sea mayor de 18.
     */
    adultAge: /^(1[89]|[2-9][0-9])$/,

    age: /^[0-9]{1,2}$/,

    /**
     * Acepta solo números.
     * Requiere mínimo 7 números y máximo 8.
     */
    dni: /^[0-9]{7,8}$/,

    /**
     * Patrón global de números celulares.
     * Requiere 6 números.
     * Admite espacios y guiones.
     * Ejemplo: +54 221 620-3057.
     */
    celphone: /^(\+?)(?:[0-9][ |-]?){9,14}[0-9]$/,

    /**
     * Admite minúsculas, mayúsculas, espacios y números.
     */
    textField: /^[a-zA-ZÁÉÍÓÚáéíóú0-9 ]{0,99}$/,

    /**
     * Adminte minúsculas y mayúsculas.
     */
    color: /^[A-Za-z]{0,21}$/,

    /**
     * Admite la palabra Hembra o Macho
     */
    sex: /^(Hembra|Macho)$/,

    /**
     * Admite números reales.
     */
    weight: /^\d{1,2}(\.\d{1})?$/,
}