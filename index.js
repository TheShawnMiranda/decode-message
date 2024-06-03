import { readFileSync } from "fs";
import { getNumber } from "./utils/getNumber.js";
import { createLastStringArray } from "./utils/createLastStringArray.js";
import { getWord } from "./utils/getWord.js";

/**
 * Accepts a file path to a text file containing a message, and decodes the message
 * @param {string} filePath - The path to the text file containing the message
 * @returns {string} The decoded message
 */
export const decode = filePath => {
  const inputArray = readFileSync(filePath, 'utf8').split('\n');
  const sortedArray = inputArray.toSorted((a, b) => getNumber(a) - getNumber(b));
  const lastStringArray = createLastStringArray(sortedArray);
  const decodedMessage = lastStringArray.map((line) => getWord(line.slice(0, -1))).join(' ')
  return decodedMessage
}

console.log(decode('./coding_qual_input.txt'))