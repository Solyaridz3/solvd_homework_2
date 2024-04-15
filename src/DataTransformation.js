/**
 * Function to check whether value is object
 * @param {any} value - Value to check
 * @return {boolean} - True if it is object, false otherwise
 */
function isObject(value) {
    return typeof value === "object" && !Array.isArray(value) && value !== null;
}

/**
 * Function to add values as values if possible
 * @param {any} first First value to add
 * @param {any} second Second value to add
 * @return {string|boolean|number|bigint|object} Result of addition
 * @throws {Error} If addition is not possible
 */
export function addValues(first, second) {
    const notAllowed = [null, undefined];
    if (!notAllowed.includes(first) && !notAllowed.includes(second)) {
        if (Array.isArray(first) && Array.isArray(second)) {
            return [...first, ...second];
        } else if (isObject(first) && isObject(second)) {
            return { ...first, ...second };
        } else if (typeof first === "string" && typeof second === "string") {
            return first + second;
        } else if (typeof first === "number" && typeof second === "number") {
            return first + second;
        } else if (typeof first === "bigint" && typeof second === "bigint") {
            return first + second;
        } else if (typeof first === "boolean" && typeof second === "boolean") {
            // According to the Boolean Addition Law, if at least one of the operands is true, the result is true. Otherwise, the result is false.
            return Boolean(first + second);
        }
    }
    throw new Error("This addition is not allowed.");
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
 * Coerce given value to given type if it is possible.
 * @param {any} value - The value to coerce to type
 * @param {string} type - The string name of the type to be coerced into
 * @return {any} - The value with given type
 * @throws {Error} - Throws error if function is unable to coerce value to given type
 */
export function coerceToType(value, type) {
    if (typeof value === type) {
        return value;
    } else if (type === "string") {
        return stringifyValue(value);
    } else if (type === "number") {
        return convertToNumber(value);
    }
    throw new Error("Unable to use type coercion for this value or type");
}
