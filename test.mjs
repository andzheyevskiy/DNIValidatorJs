import validateDNI from "./index.mjs"

const errors = []
// Test Valid DNI:
if (!validateDNI("12345678Z")) { errors.push("Failed: Valid DNI") }

// Test Invalid DNI:
if (validateDNI("12345678A")) { errors.push("Failed: Invalid DNI") }


// Test Valid NIE:
if (!validateDNI("X1234567L")) { errors.push("Failed: Valid NIE") }

// Test Invalid NIE:
if (validateDNI("X1234567A")) { errors.push("Failed: Invalid NIE") }

// Test only DNI
if (validateDNI("X1234567T", false)) { errors.push("Failed: Only DNI(NIE should not pass)") }
if (!validateDNI("12345678Z", false)) { errors.push("Failed: Only DNI(DNI should pass)") }

// Test empty String
if (validateDNI("")) { errors.push("Failed: Empty string should not pass") }

// Test null
if (validateDNI(null)) { errors.push("Failed: null should not pass") }

// Test undefined
if (validateDNI(undefined)) { errors.push("Failed: undefined should not pass") }

// Test single number
if (validateDNI("2")) { errors.push("Failed: '2' should not pass") }

// Test long string
if (validateDNI("2546454541154")) { errors.push("Failed: '2546454541154' should not pass") }

if (errors.length > 0) {
    throw new Error(`\x1b[31mTest failed: \n ${errors.join("\n")}\x1b[0m`)
} else {
    console.log("\x1b[32mTest succesfull(ES6 Module)\x1b[0m")
}