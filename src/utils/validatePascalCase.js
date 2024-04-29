function validatePascalCase(input) {
    // Check if the first character is uppercase
    if (input[0] !== input[0].toUpperCase()) {
        return false;
    }

    // Check if any character is not a letter or a digit
    for (let i = 1; i < input.length; i++) {
        if (!/[A-Za-z0-9]/.test(input[i])) {
            return false;
        }
    }

    // Check if any uppercase character is followed by another uppercase character
    for (let i = 1; i < input.length - 1; i++) {
        if (input[i] === input[i].toUpperCase() && input[i + 1] === input[i + 1].toUpperCase()) {
            return false;
        }
    }

    return true;
}

export default validatePascalCase;