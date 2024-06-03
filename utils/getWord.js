/**
 * Accepts a string with a number followed by a space followed by a word and returns just the string
 * @param {string} line - A string with a number followed by a space followed by a word. Example: "3 love"
 * @returns {string} The string from the input string. Example: "love"
 */
export const getWord = line => line.split(' ')[1]