/**
 * Simple function to validate DNI and NIE.
 *
 * @param {String} dni - DNI (or NIE) to validate.
 * @param {boolean} [excludeNIE=false] - Specifies if NIE should be excluded from validations.
 * @returns {boolean} True if DNI | NIE is valid, otherwise false.
 */
export default function validateDNI(dni, excludeNIE = false) {
    let string = String(dni).toLocaleUpperCase()
    if (!excludeNIE) {
        string = string.replace(/^[X]/, "0").replace(/^[Y]/, "1").replace(/^[Z]/, "2")
    }

    const letters = "TRWAGMYFPDXBNJZSQVHLCKE"
    const regex = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i
    if (!regex.test(string)) return false

    const numbers = parseInt(string)
    const module = numbers % 23
    return string[8].toUpperCase() === letters[module]
}