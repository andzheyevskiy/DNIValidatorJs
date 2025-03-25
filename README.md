# ValidateDNIJs

Simple function to validate DNI and NIE.

## Instalation

You can install ValidateDNIJs via npm:

```bash
npm install git+https://github.com/andzheyevskiy/DNIValidatorJs.git
```

## Usage

To use ValidateDNIJs in your project you need to import and initilize it. Here is an example:


```javascript
//Import as ES6 Modules
import validateDNI from "dnivalidatorjs";
```
```javascript
//Import as CommonJs
const validateDNI = require("dnivalidatorjs");
```

```javascript
// Validate DNI or NIE with default options

//DNI
validate("12345678Z") // true
//NIE
validate("X1234567L") // true

// Or you can validate only DNI

//DNI
validate("12345678Z", true) // true
//NIE
validate("X1234567L", true) // false
```

### Parameters

- **`dni`** `{string}`
  DNI or NIE to validate.
- **`excludeNIE`** `{boolean} [default: false]`
  Specify if NIE should be excluded from validation. When set to true, only valid DNI will return true.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.