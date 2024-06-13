/**
 * Accepts an array and returns a new array with elements from the index with it's value incrementing in teh triangle pattern
 * @param {string[]} sortedArray - A sorted array of strings with a number followed by a space followed by a word. Example: ["1 I", "2 dogs", "3 love", "4 cats", "5 you", "6 computers"]
 * @returns {string[]} A new array with elements from the index with it's value incrementing in the triangle pattern
 */
export const createLastStringArray = sortedArray => {
    let position = 1
    let lastStringArray = []
    while (sortedArray.length !== 0) {
        lastStringArray.push(sortedArray.slice(0, position)[position - 1])
        sortedArray = sortedArray.slice(position)
        position++
    }
    return lastStringArray.filter(line => line)
}