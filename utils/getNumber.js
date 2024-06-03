/**
 * Accepts a string with a number followed by a space followed by a word and returns just the number
 * @param {string} line - A string with a number followed by a space followed by a word. Example: "3 love"
 * @returns {number} The number from the input string. Example: 3
 */
export const getNumber = line => parseInt(line.split(' ')[0])