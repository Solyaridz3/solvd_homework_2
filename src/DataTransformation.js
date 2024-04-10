/**
 * Function to add values as numbers if possible
 * @param {any} first First value to add
 * @param {any} second Second value to add
 * @return {number} Result of addition
 * @throws {Error} If addition is not possible
 */
export function addValues(first, second) {
    try {
        return convertToNumber(first) + convertToNumber(second);
    } catch (err) {
        throw new Error(
            `This addition is not possible. Reason: ${err.message}`,
        );
    }
}

/**
 * Converts the value to a string
 * @param {any} value The value to stringify
 * @return {string} Stringified value
 * @throws {Error} If type of value is not boolean
 */
export function stringifyValue(value) {
    if (typeof value === "object") {
        return JSON.stringify(value);
    }
    return String(value);
}

/**
 * Inverts given boolean
 * @param {boolean} value The boolean to invert
 * @return {boolean} Inverted boolean
 * @throws {Error} If type of value is not boolean
 */
export function invertBoolean(value) {
    if (typeof value !== "boolean") {
        throw new Error("The argument should be boolean.");
    }
    return !value;
}

/**
 * Converts a given value to a number.
 * @param {any} value - The value to convert to a number.
 * @returns {number} The converted number.
 * @throws {Error} Throws an error if the conversion to number is not possible.
 */
export function convertToNumber(value) {
    const num = typeof value === "string" ? parseFloat(value) : Number(value);
    if (isNaN(num)) {
        throw new Error("The conversion to number is not possible");
    }
    return num;
}

/**
 * Converts a given value to a number.
 * @param {any} value - The value to coerce to type
 * @param {string} type - The string name of the type to be coerced into
 * @return {any} - The value with given type
 * @throws {Error} - Throws error if function is unable to coerce value to given type
 */
export function coerceToType(value, type) {
    if (typeof value === type) {
        return value;
    } else if (type === "string") {
        return value + "";
    } else if (type === "number" && !isNaN(value * 1)) {
        return value * 1;
    } else if (type === "boolean") {
        return !!value;
    }
    throw new Error("Unable to use type coercion for this value or type");
}