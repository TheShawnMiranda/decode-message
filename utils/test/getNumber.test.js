import { getNumber } from "../getNumber"

test("getNumber should return just the number", () => {
    const result = getNumber("44 trash")
    expect(result).toBe(44)
})