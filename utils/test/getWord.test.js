import { getWord } from "../getWord";

test("getWord should return just the word", () => {
    const result = getWord("44 trash");
    expect(result).toBe("trash");
});