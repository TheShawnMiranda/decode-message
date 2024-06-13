import { createLastStringArray } from "../createLastStringArray"

test("createLastStringArray should return a new array with elements from the index with it's value incrementing in the triangle pattern", () => {
    const result = createLastStringArray(["1 I", "2 dogs", "3 love", "4 cats", "5 you", "6 computers"])
    expect(result).toEqual(["1 I", "3 love", "6 computers"])
})