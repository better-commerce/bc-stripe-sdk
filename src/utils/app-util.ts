
/**
 * Counts the number of decimal places in a given number.
 *
 * If the number is an integer (i.e., has no decimal places), it returns 0.
 * Otherwise, it calculates and returns the number of digits after the decimal point.
 *
 * @param {number} value - The number to check for decimal places.
 * @returns {number} The number of decimal places in the input value.
 */
export const countDecimals = (value: number) => {
    if (Math.floor(value.valueOf()) === value.valueOf()) return 0; {
        return value.toString().split(".")[1].length || 0;
    }
};

/**
 * Sanitizes a payment amount by ensuring it has a maximum of two decimal places
 * and converting it into a whole number of cents.
 *
 * If the amount has more than two decimal places, it is rounded to two decimal
 * places before being converted into a whole number of cents.
 *
 * If the amount has zero decimal places, it is converted into a whole number of
 * cents by multiplying by 100.
 *
 * If the amount has one decimal place, it is converted into a whole number of
 * cents by multiplying by 100 and then rounding to the nearest whole number.
 *
 * @param {number} value - The payment amount to sanitize.
 * @returns {number} The sanitized payment amount in cents.
 */
export const sanitizeAmount = (value: number) => {
    let amount = 0;
    if (value) {
        const decimals = countDecimals(value);
        if (decimals > 2) {
            amount = Number.parseFloat(value.toFixed(2)) * 100;
        } else {
            if (decimals == 0) {
                amount = value * 100;
            } else {
                amount = parseInt((value * 100).toFixed(0));
            }
        }
    }
    return amount;
}