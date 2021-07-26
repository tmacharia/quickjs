/**
 * Prints to stdout with newline.
 * @param {any} data Message or object to print.
 */
export const log = (data = null) => {
    console.log(data);
}
/**
 * Prints to the stdout as a warning or error
 * @param {any} data Message or object to print
 */
export const logWarn = (data = null) => {
    console.warn(data)
}

/**
 * Prints an error to the stdout.
 * @param {any} data Message or object to print
 */
 export const logError = (data = null) => {
    console.warn(data)
}

export default logger = {
    log: log,
    info: log,
    warn: logWarn,
    error: logError
}