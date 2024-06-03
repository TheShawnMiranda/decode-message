import { decode } from "../index.js";

test("decode should decode a message and return it as a string", () => {
    const result = decode("./coding_qual_input.txt");
    expect(result).toEqual("young system present student lot experiment strong crease sun company hurry remember milk us repeat clothe against meant history indicate pitch print bread would");
});